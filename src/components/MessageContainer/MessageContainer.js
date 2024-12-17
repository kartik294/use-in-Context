
import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {Message} from "./Message";
import ErrorFallBack from "./ErrorFallback";
import LoadingFallback from "./LoadingFallback";

export function MessageContainer({ messagePromise }) {
  return (
    <ErrorBoundary fallback={<ErrorFallBack />}>
      <Suspense fallback={<LoadingFallback />}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
