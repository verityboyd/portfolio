import { Icon } from "@iconify/react";

export default function Sparkle({ skill, sparkleColour }) {
  return (
    <li className="flex flex-row items-start gap-3">
      <Icon
        icon="pixelarticons:sparkle"
        width="22"
        height="22"
        className={sparkleColour}
      />
      {skill}
    </li>
  );
}
