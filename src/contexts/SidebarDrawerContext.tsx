import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({  } as SidebarDrawerContextData);

interface SidebarDrawerContextProviderProps {
  children: ReactNode;
}
export function SidebarDrawerContextProvider({ children }: SidebarDrawerContextProviderProps){

  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath]);

  return(
    <SidebarDrawerContext.Provider value={ disclosure }>  
      { children }
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);