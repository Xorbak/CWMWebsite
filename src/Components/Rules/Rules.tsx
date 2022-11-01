import { MenuItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { GlobalStyles } from "../../App";
import { RuleItem } from "./rule content/ruleItem";
import cwmRules from "./cwmRules.json";

interface Rules {
  name: string;
  rules: string[];
}
export const Rules = () => {
  const [showRules, setShowRules] = useState<number>(0);
  const ruleTocArr: string[] = cwmRules.map((i) => {
    return i.name;
  });
  const rules: Rules[] = cwmRules;
  return (
    <Box sx={GlobalStyles.App}>
      <Box sx={styles.ruleBox}>
        <Typography
          sx={{
            paddingY: "15px",
            borderBottom: "1px solid",
            borderColor: "primary.dark",
          }}
          variant="h2"
        >
          Rules
        </Typography>
        <Box sx={styles.ruleTocBox}>
          <Box
            sx={{
              borderRight: "1px solid",
              borderColor: "primary.dark",
              minHeight: "100%",
            }}
          >
            {ruleTocArr.map((i) => {
              return (
                <MenuItem
                  onClick={() => {
                    setShowRules(ruleTocArr.indexOf(i));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  sx={{ minWidth: "150px", textAlign: "start" }}
                >
                  {i}
                </MenuItem>
              );
            })}
          </Box>
          <Box>
            <Typography sx={{ marginX: "20px" }}>
              <RuleItem
                title={rules[showRules].name}
                rule={rules[showRules].rules}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  ruleBox: {
    marginY: "100px",
    width: "900px",
    minHeight: "500px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
  },
  ruleTocBox: { display: "flex", flexDirection: "row", height: "90%" },
};
