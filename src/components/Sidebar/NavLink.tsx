import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";


interface NaveLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NaveLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest }>
      <Icon as={ icon } fontSize="20" />
      <Text ml="4" fontWeight="medium">{ children }</Text>
    </Link>
  );
}