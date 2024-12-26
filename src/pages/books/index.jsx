import { MainLayout } from '../../components/layout//dashoard/MainLayout';
import { DashboardHeader } from '../../components/Dashboard/header';

const dashboard = () => {
  return (
    <MainLayout>
      <DashboardHeader title="Dashboard" subtitle="Welcome back to your dashboard" />
    </MainLayout>
  )
}

export default dashboard