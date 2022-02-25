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

  async function addNewLog(log) {
    const { data } = await api.post('/logs', {
      ...log,
      createdAt: Date.now(),
    });

    setLogs((logs) => [...logs, data.log]);
  }

  return (
    <LogContext.Provider value={{ logs, addNewLog }}>
      {children}
    </LogContext.Provider>
  );
}
