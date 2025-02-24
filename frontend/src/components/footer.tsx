import facebookIcon from "../assets/facebook-brands.svg";
import twiiterIcon from "../assets/twitter-brands.svg";
import githubIcon from "../assets/github-brands.svg";
import linkedInIcon from "../assets/linkedin-brands.svg";

export function Footer() {
  return (
    <footer className="w-full flex justify-between items-center py-8">
      <p className="font-bold text-primary">2025 Blogs. All rights reserved</p>

      <div className="flex items-center gap-4">
        <img src={facebookIcon} alt="facebook icon" className="w-6" />
        <img src={twiiterIcon} alt="twitter icon" className="w-6" />
        <img src={githubIcon} alt="github icon" className="w-6" />
        <img src={linkedInIcon} alt="linkedIn icon" className="w-6" />
      </div>
    </footer>
  );
}
