"use client";

import {
  Slide,
  TextField,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { Colors } from "@/styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { ContactBoxContainer } from "@/styles/helpPage";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { MyList } from "@/styles/appbar";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";

const combinedData = [
  {
    type: "Typography",
    variant: "caption2",
    text: "Send a message",
  },
  {
    type: "AvatarGroup",
    avatars: [
      { name: "Remy Sharp" },
      { name: "Travis Howard" },
      { name: "Cindy Baker" },
      { name: "Agnes Walker" },
    ],
  },
  {
    type: "Typography",
    variant: "h6",
    text: "How can we help?",
  },
  {
    type: "Typography",
    variant: "body2",
    text: "We usually respond in a few hours",
  },
];

export default function ContactBox() {
  const { showContactBox } = useAppSelector((state) => state.showContactBox);
  const dispatch = useAppDispatch();

  return (
    <>
      <Slide direction="down" in={showContactBox} timeout={500}>
        <ContactBoxContainer>
          <MyList>
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                background: "rgb(44, 50, 61);",
                padding: "1rem",
              }}>
              {combinedData.map((item, index) => (
                <React.Fragment key={`item-${index}`}>
                  {item.type === "Typography" && (
                    <Typography
                      variant={item.variant}
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        fontSize: item.variant === "body2" ? "12px" : undefined,
                      }}>
                      {item.text}
                    </Typography>
                  )}
                  {item.type === "AvatarGroup" && (
                    <Box sx={{ padding: "0.65rem" }}>
                      <AvatarGroup
                        max={4}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        {item.avatars.map((avatar, avatarIndex) => (
                          <Avatar
                            key={`avatar-${avatarIndex}`}
                            alt={avatar.name}
                            src={avatar.src}
                          />
                        ))}
                      </AvatarGroup>
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
            <Box sx={{ paddingTop: "1rem" }}>
              {["Name", "Subject", "Email address"].map((value, index) => (
                <Box
                  key={`input-${index}`}
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      m: 1,
                      width: "33ch",
                    },
                    paddingLeft: "0.8rem",
                    background: Colors.light_grey,
                  }}
                  noValidate
                  autoComplete="off">
                  <TextField label={`${value}`} multiline />
                </Box>
              ))}
            </Box>
            <Box
              key="textarea-box"
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "33ch",
                },
                paddingLeft: "0.8rem",
                background: Colors.light_grey,
              }}
              noValidate
              autoComplete="off">
              <TextField label="How can we help?" multiline rows={4} />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              sx={{
                background: Colors.light_grey,
                // pb: "2rem",
              }}>
              <Button
                variant="contained"
                disableTouchRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  p: "1rem 6rem",
                  ml: "1rem",
                  mr: "0.9rem",
                  mt: "0.9rem",
                  "&.MuiButton-root:hover": {
                    background: "rgb(44, 50, 61);",
                  },
                }}>
                Send a message
              </Button>
            </Box>
            <Box
              sx={{
                background: Colors.light_grey,
                // pb: "2rem",
              }}>
              <IconButton
                variant="contained"
                onClick={() => dispatch(setShowContactBox(false))}
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 0,
                  color: Colors.green,
                  background: "transparent",
                }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </MyList>
        </ContactBoxContainer>
      </Slide>
    </>
  );
}
