/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export function useSetPage(
  setPage: React.Dispatch<React.SetStateAction<number>>,
  dependencyArrays: any[]
) {
  useEffect(() => {
    setPage(1);
  }, dependencyArrays);
}
