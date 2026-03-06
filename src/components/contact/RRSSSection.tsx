import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
);

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.025.812-.675 1.926-1.072 3.215-1.149 1.08-.064 2.088.05 2.997.339-.07-.476-.186-.9-.348-1.267-.394-.894-1.09-1.37-2.07-1.414-.795-.036-1.576.18-2.199.607l-1.18-1.704c.905-.629 2.063-1.003 3.268-1.055 1.578-.072 2.923.394 3.777 1.312.72.773 1.164 1.882 1.32 3.294.41.168.796.37 1.15.607 1.297.867 2.178 2.108 2.553 3.59.538 2.123.163 4.744-2.05 6.912-1.907 1.87-4.226 2.693-7.5 2.717zM14.4 13.052c-.792-.046-2.278.066-2.926.576-.39.307-.566.688-.54 1.163.04.71.596 1.197 1.487 1.305.58.07 1.266-.04 1.822-.293.87-.396 1.378-1.086 1.514-2.058-.437-.148-.912-.241-1.391-.278z"/></svg>
);

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100064673082282", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/prestoiberica/?hl=es", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/prestoiberica", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/presto-iberica-s-a-/?originalSubdomain=es", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/user/PrestoIberica", label: "YouTube" },
  { icon: PinterestIcon, href: "https://www.pinterest.es/prestoiberica/", label: "Pinterest", isCustom: true },
  { icon: ThreadsIcon, href: "https://www.threads.net/@prestoiberica", label: "Threads", isCustom: true },
];

export const RRSSSection = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-foreground py-16 px-8 text-center">
        <h3 className="text-background uppercase tracking-widest text-sm font-medium mb-10">
          Síguenos
        </h3>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-14 h-14 flex items-center justify-center border border-background/20 text-background/70 hover:text-background hover:border-background transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
