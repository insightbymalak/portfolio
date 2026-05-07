import { useMemo, useState } from 'react';

/**
 * Centralized filter state for the project gallery.
 * Currently we filter by certification id; extend with tags/status as needed.
 */
export function useFilter(projects, certifications) {
  const [activeCertId, setActiveCertId] = useState(null);

  const activeCert = useMemo(
    () => certifications.find((c) => c.id === activeCertId) ?? null,
    [activeCertId, certifications],
  );

  const filtered = useMemo(() => {
    if (!activeCertId) return projects;
    return projects.filter((p) => p.appliedCerts?.includes(activeCertId));
  }, [activeCertId, projects]);

  const toggle = (certId) =>
    setActiveCertId((prev) => (prev === certId ? null : certId));

  const clear = () => setActiveCertId(null);

  return { activeCertId, activeCert, filtered, toggle, clear };
}
