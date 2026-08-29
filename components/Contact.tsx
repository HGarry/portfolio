import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { liquidStyles } from "./styles/styles";
import { Grid } from "@mui/material";

function Contact() {
  return (
    <section id="contact" className="p-6 py-12">
      <Grid container spacing={4} className="h-1/2">
        <Grid size={6} className={`${liquidStyles.card} w-3xl`}>
          <Grid container spacing={5} className="justify-center items-center">
            <h2 className={`${liquidStyles.heroHeadline} mb-6`}>
            Let&apos;s Work Together
          </h2>
          <p className={`${liquidStyles.glowTextWhite} text-xl`}>
            Let’s work together to turn ideas into impactful digital
            experiences. With a blend of creative design, clean code, and
            technical expertise in networking and development, I’m ready to
            collaborate, solve problems, and bring fresh energy to every
            project.
          </p>
          
            <Grid size={6} className={`flex justify-around ${liquidStyles.iconBox} items-center `}>
            <LocalPhoneIcon sx={{color: "#fafafa"}} />
            <Grid size={8} className={`${liquidStyles.glowTextCyan}`}>
              <p>Phone</p>
              <p>(+95) 9740-963-622</p>
            </Grid>
          </Grid>
          <Grid size={6} className={`flex justify-around ${liquidStyles.iconBox} items-center `}>
            <EmailIcon sx={{color: "#fafafa"}} />
            <Grid size={8} className={`${liquidStyles.glowTextCyan}`}>
              <p>Mail</p>
              <p>harrynotberry@gmail.com</p>
            </Grid>
          </Grid>
          <Grid size={12} className={`flex justify-around ${liquidStyles.iconBox} items-center `}>
            <LocationOnIcon sx={{color: "#fafafa"}} />
            <Grid size={8} className={`${liquidStyles.glowTextCyan}`}>
              <p>Address</p>
              <p>No.751, Thamine 3st, Mayangone Tsp, Myanmar</p>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Grid size={6} className={`${liquidStyles.card} w-3xl`}>
          <form action="">
            <h2 className={`${liquidStyles.heroHeadline} mb-4`}>
              Contact <span className="text-amber-300">Me!</span>
            </h2>
            <Grid
              container
              spacing={2}
              className="field-box bg-cover rounded-4xl"
            >
              <Grid size={6} className={`${liquidStyles.card}`}>
                <input type="text" placeholder="Full Name" required />
              </Grid>
              <Grid size={6} className={`${liquidStyles.card}`}>
                <input type="email" placeholder="Email Address" required />
              </Grid>
              <Grid size={12} className={`${liquidStyles.card}`}>
                <input type="text" placeholder="Phone Number" required />
              </Grid>
              <Grid size={12} className={`${liquidStyles.card}`}>
                <input type="text" placeholder="Email Subject" required />
              </Grid>
              <Grid size={12} className={`${liquidStyles.card}`}>
                <textarea
                  name=""
                  id=""
                  placeholder="Your Message"
                  required
                ></textarea>
              </Grid>
            </Grid>
            <button className={`${liquidStyles.button} mt-4`} type="submit">
              Send Message
            </button>
          </form>
        </Grid>
      </Grid>
    </section>
  );
}

export default Contact;
