import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    // Automatically open submenu if current page is in submenu items
    useEffect(() => {
        const activeSubmenu = items.find(item => 
            item.subItems?.some(subItem => subItem.href === page.url)
        );
        console.log(activeSubmenu);
        if (activeSubmenu) {
            setOpenSubmenu(activeSubmenu.title);
        }
    }, [page.url, items]);

    const toggleSubmenu = (title: string) => {
        setOpenSubmenu(openSubmenu === title ? null : title);
    };

    // Check if any subitem is active
    const isSubmenuActive = (subItems: NavItem['subItems']) => {
        return subItems?.some(subItem => subItem.href === page.url);
    };

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <div key={item.title}>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild={!item.subItems}
                                isActive={item.href === page.url || isSubmenuActive(item.subItems)}
                                onClick={item.subItems ? () => toggleSubmenu(item.title) : undefined}
                            >
                                {item.subItems ? (
                                    <div className="flex items-center justify-between w-full">
                                        <div className='flex items-center'>
                                            {item.icon && <item.icon className="mr-4 h-4 w-4" />}
                                            <span>{item.title}</span>
                                        </div>
                                        {openSubmenu === item.title ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </div>
                                ) : (
                                    <Link href={item.href || '#'} prefetch>
                                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                                        <span>{item.title}</span>
                                    </Link>
                                )}
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        {item.subItems && openSubmenu === item.title && (
                            <div className="ml-4 border-l-1 pl-2">
                                {item.subItems.map((subItem) => (
                                    <SidebarMenuItem key={subItem.title}>
                                        <SidebarMenuButton asChild isActive={subItem.href === page.url}>
                                            <Link href={subItem.href} prefetch>
                                                <span>{subItem.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}