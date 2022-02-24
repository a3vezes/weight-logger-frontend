import { useState } from 'react';
import { LogContext } from './logContext';
import { api } from 'services';
import { useEffect } from 'react';

export function LogProvider({ children }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function getLogs() {
      const { data } = await api.get('logs');

      setLogs(data.logs);
    }

    getLogs();
  }, []);

  return (
    <LogContext.Provider value={{ logs: logs }}>{children}</LogContext.Provider>
  );
}
