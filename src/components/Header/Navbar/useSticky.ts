import { useEffect, useRef, useState } from "react";

const useSticky = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState<number | null>(null);

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }
    setStickyOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setStickyOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      if (stickyOffset !== null) {
        const shouldBeSticky = window.scrollY > stickyOffset;
        setSticky(shouldBeSticky);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky, stickyRef, stickyOffset]);
  return { stickyRef, sticky };
};

export default useSticky;
