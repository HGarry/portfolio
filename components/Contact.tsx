"use client";

import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { liquidStyles } from "./styles/styles";
import { Grid } from "@mui/material";
import { FadeIn } from "./Animation";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh

    const mailSubject = encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry",
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );

    // Opens default email app with form data pre-filled
    window.location.href = `mailto:harrynotberry@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section
      id="contact"
      className="lg:w-[80%] md:w-[90%] mx-auto p-6 py-12 scroll-mt-24"
    >
      <Grid container spacing={4} className="h-1/2">
        <Grid
          size={{ xs: 12, md: 12, lg: 6 }}
          className={`${liquidStyles.card} w-full`}
        >
          <FadeIn direction="right">
            <Grid container spacing={5} className="justify-center items-center">
              <h2 className={`${liquidStyles.heroHeadline} mb-6`}>
                Let&apos;s Work{" "}
                <span className="text-amber-300">Together!</span>
              </h2>
              <p className={`${liquidStyles.glowTextWhite} text-xl`}>
                Let’s work together to turn ideas into impactful digital
                experiences. With a blend of creative design, clean code, and
                technical expertise in networking and development, I’m ready to
                collaborate, solve problems, and bring fresh energy to every
                project.
              </p>

              <Grid
                size={{ xs: 12, md: 12, lg: 12 }}
                className={`flex p-3 gap-6 ${liquidStyles.iconBox} items-center `}
              >
                <LocalPhoneIcon sx={{ color: "#fafafa" }} />
                <Grid
                  size={{ xs: 12, md: 12, lg: 8 }}
                  className={`${liquidStyles.glowTextCyan} flex justify-around flex-col md:flex-row lg:flex-col`}
                >
                  <p>Phone</p>
                  <p>(+95) 9740-963-622</p>
                </Grid>
              </Grid>
              <Grid
                size={{ xs: 12, md: 12, lg: 12 }}
                className={`flex gap-6 ${liquidStyles.iconBox} items-center `}
              >
                <EmailIcon sx={{ color: "#fafafa" }} />
                <Grid
                  size={{ xs: 12, md: 12, lg: 12 }}
                  className={`${liquidStyles.glowTextCyan} flex justify-around flex-col md:flex-row lg:flex-col`}
                >
                  <p>Mail</p>
                  <p>harrynotberry@gmail.com</p>
                </Grid>
              </Grid>
              <Grid
                size={12}
                className={`flex gap-6 ${liquidStyles.iconBox} items-center `}
              >
                <LocationOnIcon sx={{ color: "#fafafa" }} />
                <Grid
                  size={12}
                  className={`${liquidStyles.glowTextCyan} flex justify-around flex-col md:flex-row lg:flex-col`}
                >
                  <p>Address</p>
                  <p>Yangon, Myanmar</p>
                </Grid>
              </Grid>
            </Grid>
          </FadeIn>
        </Grid>
        <Grid
          size={{ xs: 12, md: 12, lg: 6 }}
          className={`${liquidStyles.card} w-full`}
        >
          <FadeIn direction="left">
            <form onSubmit={handleSubmit}>
              <h2 className={`${liquidStyles.heroHeadline} mb-4`}>
                Contact <span className="text-amber-300">Me!</span>
              </h2>
              <Grid
                container
                spacing={2}
                className="field-box bg-cover rounded-4xl"
              >
                <Grid
                  size={{ xs: 12, md: 12, lg: 6 }}
                  className={`${liquidStyles.card}`}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className={`${liquidStyles.input}`}
                  />
                </Grid>
                <Grid
                  size={{ xs: 12, md: 12, lg: 6 }}
                  className={`${liquidStyles.card}`}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className={`${liquidStyles.input}`}
                  />
                </Grid>
                <Grid size={12} className={`${liquidStyles.card}`}>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className={`${liquidStyles.input}`}
                  />
                </Grid>
                <Grid size={12} className={`${liquidStyles.card}`}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Email Subject"
                    required
                    className={`${liquidStyles.input}`}
                  />
                </Grid>
                <Grid size={12} className={`${liquidStyles.card}`}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className={`${liquidStyles.input}`}
                  ></textarea>
                </Grid>
              </Grid>
              <button className={`${liquidStyles.button} mt-4`} type="submit">
                Send Message
              </button>
            </form>
          </FadeIn>
        </Grid>
      </Grid>
    </section>
  );
}

export default Contact;
