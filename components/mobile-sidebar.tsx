"use client"

import { Menu} from "lucide-react"

import { Button } from "./ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Sidebar from "@/components/Sidebar"

const Mobilesidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent side="left"  className="p-0">
          <Sidebar/>
        </SheetContent>
    </Sheet>
  );
}

export default Mobilesidebar