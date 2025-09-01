import React from "react";
import { Box, Typography, TextField, Button, Paper, Fade } from "@mui/material";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <Fade in={true} timeout={800}>
        <Box className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <Box className="flex-1 space-y-6 text-center lg:text-left">
            <Typography variant="h4" component="h2" className="font-bold text-gray-800">
              Have Questions?
            </Typography>
            <Typography className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Have questions or ready to start your project? Reach out through our contact form — we’d love to hear from you!
            </Typography>
            <img
              src="https://visibilitybots.com/wp-content/uploads/2024/11/IT-Business-Process-Image-1.webp"
              alt="Contact illustration"
              className="w-full max-w-md rounded-2xl shadow-lg mx-auto lg:mx-0"
            />
          </Box>

          {/* Right Form */}
          <Box className="flex-1 w-full">
            <Fade in={true} timeout={1200}>
              <Paper elevation={6} className="p-8 rounded-2xl shadow-xl bg-white">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <TextField label="First Name *" placeholder="E.g. John" fullWidth required className="bg-white" />
                  <TextField label="Email Address *" placeholder="E.g. john@doe.com" type="email" fullWidth required />
                  <TextField label="Phone Number" placeholder="E.g. +1 3004005000" fullWidth />
                  <TextField label="Organization" placeholder="Organization Name" fullWidth />
                  <TextField
                    label="Message *"
                    placeholder="Enter your message..."
                    fullWidth
                    required
                    multiline
                    rows={4}
                    inputProps={{ maxLength: 180 }}
                    helperText="Max 180 characters"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="!bg-blue-600 hover:!bg-blue-700 transition-transform duration-300 font-medium rounded-lg"
                    sx={{ py: 1.5, textTransform: "none", "&:hover": { transform: "scale(1.03)" } }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Fade>
          </Box>

        </Box>
      </Fade>
    </section>
  );
}
