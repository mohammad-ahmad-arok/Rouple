import Button from "../Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="gridSection">
      <div className="sectionDesc dashboardDesc">
        <SectionHeader
          title="Trade crypto in seconds"
          para="But with prouple, you can mine bitcoin from your own phone! You no longer have to worry about costly transactions."
        />
        <Button text="play video" type="stroke" />
      </div>
      <div className="sectionPic dashboardPic">
        <img src="/assets/images/dashboard-dark.png" alt="dashboard-dark" />
      </div>
    </section>
  );
};

export default Dashboard;
