import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/md-fahad-hosen-bb3637278/"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/fahad-hossain22" icon={BsGithub} />
          <Footer.Icon
            href="mailto:fahadhosen.dev.19@gmail.com"
            icon={BsEnvelope}
          />
          {/* <Footer.Icon href="https://t.me/mah_moud_2003" icon={BsTelegram} /> */}
          <Footer.Icon
            href="https://wa.me/8801619224933"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
