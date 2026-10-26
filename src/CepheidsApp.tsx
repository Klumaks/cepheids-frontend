import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CEPHEID_CLASSES } from "./data/cepheidClasses";
import {
  INITIAL_CEPHEID_RANGE,
  cepheidRangeError,
  filterCepheidClasses,
} from "./lib/cepheidCalibration";
import { CepheidGridPage } from "./pages/CepheidGridPage";
import { CepheidFeedPage } from "./pages/CepheidFeedPage";
import { CepheidNavigation } from "./components/CepheidNavigation";
export function CepheidsApp() {
  const [cepheidRange, setCepheidRange] = useState(INITIAL_CEPHEID_RANGE);
  const [appliedCepheidRange, setAppliedCepheidRange] = useState(
    INITIAL_CEPHEID_RANGE,
  );
  const [cepheidError, setCepheidError] = useState("");
  const { pathname } = useLocation();
  const classes = filterCepheidClasses(CEPHEID_CLASSES, appliedCepheidRange);
  useEffect(() => {
    document.title = `Атлас цефеид — ${pathname.startsWith("/feed") ? "лента" : "плитка"}`;
  }, [pathname]);
  const applyCepheidRange = () => {
    const error = cepheidRangeError(cepheidRange);
    setCepheidError(error);
    if (!error) setAppliedCepheidRange({ ...cepheidRange });
  };
  return (
    <div className="cepheids-app">
      <Routes>
        <Route path="/" element={<Navigate to="/classes" replace />} />
        <Route
          path="/classes"
          element={
            <CepheidGridPage
              classes={classes}
              range={cepheidRange}
              error={cepheidError}
              onChange={setCepheidRange}
              onApply={applyCepheidRange}
            />
          }
        />
        <Route path="/feed" element={<CepheidFeedPage classes={classes} />} />
        <Route
          path="/feed/:id"
          element={<CepheidFeedPage classes={classes} />}
        />
        <Route path="*" element={<Navigate to="/classes" replace />} />
      </Routes>
      <CepheidNavigation />
    </div>
  );
}
