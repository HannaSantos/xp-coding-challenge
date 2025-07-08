import Header from "../components/Header/Header";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import TableUser from "../components/TableUser/TableUser";
import ChartStartup from "../components/Chart/Chart";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <Header />
      <CustomBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard" },
        ]}
      />
      
      <div className={styles.aling}>
        <ChartStartup />
        <TableUser />
      </div>
    </>



  );
}