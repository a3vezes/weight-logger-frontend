import { LogContext } from './logContext';

export function LogProvider({ children }) {
  return (
    <LogContext.Provider values={{ logs: [] }}>{children}</LogContext.Provider>
  );
}
