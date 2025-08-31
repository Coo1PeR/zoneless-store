import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

interface SignalFromRequestOptions<T> {
    initialValue: T;
    errorValue?: T;
    onError?: (err: unknown) => void;
}

export function signalFromRequest<T>(
    source$: Observable<T>,
    options: SignalFromRequestOptions<T>
) {
    return toSignal(source$, {
        initialValue: options.initialValue,
        requireSync: false,
    });
}
