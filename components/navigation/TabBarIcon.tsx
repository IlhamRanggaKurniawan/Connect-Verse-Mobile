import { type LucideIcon } from "lucide-react-native";


export function TabBarIcon({ icon: Icon, color}: { icon: LucideIcon, color: string }) {
  return <Icon size={28} color={color}/>;
}
