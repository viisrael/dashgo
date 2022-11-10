import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav(){
  return(
    <Stack spacing="12" align="flex-start">
        
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>
            {/* everything inside here is a "children" to NavLink */}
            Dashboard
          </NavLink>

          <NavLink icon={RiContactsLine}>
            {/* everything inside here is a "children" to NavLink */}
            Usuários
          </NavLink>
        </NavSection>


        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>
            {/* everything inside here is a "children" to NavLink */}
            Formulários
          </NavLink>

          <NavLink icon={RiGitMergeLine}>
            {/* everything inside here is a "children" to NavLink */}
            Automação
          </NavLink>
        </NavSection>
        
    </Stack>
  );

}