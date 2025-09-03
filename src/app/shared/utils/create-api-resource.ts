import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, finalize, Observable, of, shareReplay, startWith, Subject, switchMap, tap } from 'rxjs';
import { signal } from '@angular/core';

export interface ApiResourceOptions<T> {
    initialValue: T;
    errorValue?: T;
    onError?: (err: unknown) => void;
    autoFetch?: boolean;
}

export function createApiResource<T>(
    source$: () => Observable<T>,
    options: ApiResourceOptions<T>
) {
    const loading = signal(false);
    const error = signal<unknown | null>(null);

    const trigger$ = new Subject<void>();

    const wrapped$ = trigger$.pipe(
        switchMap(() => {
            loading.set(true);
            error.set(null);
            return source$().pipe(
                catchError((err) => {
                    error.set(err);
                    options.onError?.(err);
                    return of(options.errorValue ?? options.initialValue);
                }),
                finalize(() => loading.set(false)),
                startWith(options.initialValue)
            );
        }),
        shareReplay(1)
    );

    const data = toSignal(wrapped$, {
        initialValue: options.initialValue,
        requireSync: false,
    });

    const refetch = () => trigger$.next();

    if (options.autoFetch !== false) {
        refetch();
    }

    return { data, loading, error, refetch };
}

