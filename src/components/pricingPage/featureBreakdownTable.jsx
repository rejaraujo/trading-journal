// import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Colors } from "@/styles/theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
  },
}));

function createData(name, basic, silver, gold) {
  return { name, basic, silver, gold };
}

const rows = [
  createData("Number of trades", "30/month", "unlimeted", "unlimited"),
  createData("Trade import from brokers (supported list)", "✓", "✓", "✓"),
  createData("Stocks and ETFs", "✓", "✓", "✓"),
  createData("Automatic price charts on multiple timeframes", "✓", "✓", "✓"),
  createData("Entries/exits shown on price charts", "✓", "✓", "✓"),
  createData("Tagging and filtering", "✓", "✓", "✓"),
  createData("Overview reports", "✓", "✓", "✓"),
  createData("Detailed reports", "✓", "✓", "✓"),
  createData("Dashboard", "✓", "✓", "✓"),
  createData("Share trades with community", "✓", "✓", "✓"),
  createData("Futures support", "✓", "✓", "✓"),
  createData("Forex support", "✓", "✓", "✓"),
  createData("Options support", "✓", "✓", "✓"),
  createData("Intraday and running P&L charts", "", "✓", "✓"),
  createData("Renko, Volume Bar, and Range Bar charts", "", "✓", "✓"),
  createData("MFE/MAE statistics", "", "✓", "✓"),
  createData("Interactive drill-down reports (details)", "", "✓", "✓"),
  createData("Advanced reports", "", "more than 100", "more than 300"),
  createData("Multiple independent trading accounts", "", "✓", "✓"),
  createData("Download/Export to Excel", "", "✓", "✓"),
  createData("Image uploads and storage", "", "1GB", "1GB"),
  createData("Mentoring (details)", "", "✓", "✓"),
  createData("Price chart studies and comparisons", "", "✓", "✓"),
  createData("Adjust auto-merge and auto-split settings", "", "✓", "✓"),
  createData("Include P&L data with shared trades", "", "✓", "✓"),
  createData("Selectable base currency (details)", "", "✓", "✓"),
  createData("Risk tracking and reporting (details)", "", "", "✓"),
  createData("Advanced Filters", "", "", "✓"),
  createData("Exit analysis (details)", "", "", "✓"),
  createData("Commission and fee support (details)", "", "", "✓"),
  createData("Liquidity reports (details)", "", "", "✓"),
];

export default function FeatureBreakdownTable() {
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440, backgroundColor: "white" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  sx={{
                    border: "1px solid black",
                    position: "sticky",
                    left: 0,
                    backgroundColor: "white",
                  }}></StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    border: "1px solid black",
                  }}>
                  Basic
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    $0/monthly
                  </Typography>
                  <Link
                    href="/signup-plan"
                    style={{
                      color: Colors.green,
                    }}>
                    Free
                  </Link>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    border: "1px solid black",
                  }}>
                  Silver
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    $29/monthly
                  </Typography>
                  <Link
                    href="/signup-plan"
                    style={{
                      color: Colors.green,
                    }}>
                    7-day Free Trial
                  </Link>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    border: "1px solid black",
                  }}>
                  Gold
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    $49/monthly
                  </Typography>
                  <Link
                    href="/signup-plan"
                    style={{
                      color: Colors.green,
                    }}>
                    7-day Free Trial
                  </Link>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "1px solid black",
                      position: "sticky",
                      left: 0,
                      backgroundColor: "white",
                    }}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: "1px solid black" }}>
                    {row.basic}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: "1px solid black" }}>
                    {row.silver}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ border: "1px solid black" }}>
                    {row.gold}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          variant="body1"
          sx={{
            padding: "2rem",
            textAlign: "center",
            letterSpacing: "1px",
            fontStyle: "italic",
            color: Colors.dove_gray,
          }}>
          Trial periods are available for new users choosing a silver or gold
          plan at signup. Your credit card will be automatically charged when
          the trial period is up, unless you switch to a free plan before the
          end of the trial period.
        </Typography>
      </Paper>
    </>
  );
}
