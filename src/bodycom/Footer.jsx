import { Grid, Link, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
// import "./footer.css";

const GridHolder = styled(Grid)(({ theme }) => ({
  marginTop: "0px !important",
}));

const InnerText = styled(Paper)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "left",
  boxSizing: "border-box",
}));

const Footer = () => {
  return (
    <>
      <Grid sm={12}>
        <InnerText elevation={3}>
          <GridHolder container alignContent={"center"}>
            <Grid sm={2.5}>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <h2>Meta Open Source</h2>
              </Link>
              <span>Copyright © Meta</span>
              <br /> <br />
              <span>Platforms, Inc</span>
              <br />
              <br />
              <span>UWV?</span>
            </Grid>
            <Grid sm={2}>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <h2>Learn React</h2>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Quick Start</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Installation</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Describing the UI</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Adding Interactivity</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Managing State</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Escape Hatches</p>
              </Link>
            </Grid>
            <Grid sm={2.5}>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <h2>Api Reference</h2>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>React APIs</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>React DOM APIs</p>
              </Link>
            </Grid>
            <Grid sm={2.5}>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <h2> Community</h2>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Code of Conduct</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Meet the Team</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Docs Contributors</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Acknowledgements</p>
              </Link>
            </Grid>
            <Grid sm={2.5}>
              <Link href="/" sx={{ textDecoration: "none" }}>
                <h2>More</h2>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Blog</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>React Native</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Privacy</p>
              </Link>
              <Link href="#" sx={{ textDecoration: "none" }}>
                <p>Terms</p>
              </Link>
              <Grid sm={12}>
                <Link
                  href="#"
                  sx={{ textDecoration: "none", marginRight: "8px" }}
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="#"
                  sx={{ textDecoration: "none", marginRight: "8px" }}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="#"
                  sx={{ textDecoration: "none", marginRight: "8px" }}
                >
                  <GitHubIcon />
                </Link>
                <Link href="#" sx={{ textDecoration: "none" }}>
                  <XIcon />
                </Link>
              </Grid>
            </Grid>
          </GridHolder>
        </InnerText>
      </Grid>
    </>
  );
};

export default Footer;
