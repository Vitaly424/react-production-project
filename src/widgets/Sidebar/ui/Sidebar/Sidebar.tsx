import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [callapsed, setCallapsed] = useState(false);

    const onToggle = () => {
        setCallapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.callapsed]: callapsed }, [className])}>
            <Button onClick={onToggle}>Toggle</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
