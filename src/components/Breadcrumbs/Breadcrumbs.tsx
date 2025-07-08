import { Breadcrumbs as BreadcrumbsMUI, Typography } from '@mui/material';
import Link from "next/link";
import styles from './Breadcrumbs.module.css';


interface BreadcrumbProps {
    items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
    return (
        <div className={styles.formato}>
            <BreadcrumbsMUI arial-label='breadcrumb'>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    if (isLast || !item.href) {
                        return (
                            <Typography color="text.primary" key={index}>
                                {item.label}
                            </Typography>
                        );
                    }

                    return (
                        <Link href={item.href} key={index} passHref>
                            <Typography color="inherit" sx={{ cursor: "pointer" }}>
                                {item.label}
                            </Typography>
                        </Link>
                    );
                })}
            </BreadcrumbsMUI>
        </div>
    );
}

