import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import About from '../pages/about'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'
import ScheduleSupply from '../pages/scheduleSupply'
import ViewSchedule from '../pages/viewSchedules'
import UpdateSchedules from '../pages/updateSchedule'
import CancelSchedules from '../pages/cancelSchedules'
import SupplierMembershipRequest from '../pages/supplierMembershipRequest'
import UpdateBatch from '../components/UpdateBatch.js'
import Batch from '../pages/Batch.js'
import BatchForm from '../pages/BatchForm.js'
import Home from '../pages/home'
import ProductList from '../pages/ProductList.js'
import UpdateProduct from '../components/UpdateProduct.js'
import ProductForm from '../pages/ProductForm.js'
import LeaveUpdateForm from '../pages/sanjula/update-leave-page'
import LeaveCreateForm from '../pages/sanjula//create-leave-page'
import LeaveList from '../pages/sanjula/leave-list-page'
import LeaveDelete from '../pages/sanjula/delete-leave-page'

import SupplierList from '../pages/supplierList'
import InspecReqList from '../pages/inspecReqList'
import SupplierDetails from '../components/supplier/supplierDetails'
import SupplierAddForm from '../components/supplier/supplierAddForm'
import SupplierRemove from '../components/supplier/supplierRemove'
import SupplierMail from '../components/supplier/supplierMail'
import SupplierUpdate from '../components/supplier/supplierUpdate'
import SupMemberReqList from '../components/supplier/supMemberReqList'
import MemberReqDetails from '../components/supplier/memberReqDetails'
import InspecReqDetails from '../components/supplier/inspecReqDetails'
import SupScheduleList from '../pages/supScheduleList'
import ScheduleDetails from '../components/supplier/scheduleDetails'
import Header from '../components/layout/header'

const IndexRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/axiostest" element={<Axiostest />} />
        <Route path="/delivery" element={<CraeteDelivery />} />

        <Route path="/supplierList" element={<SupplierList />} />
        {/* <Route path="/" element={<SupplierList />} /> */}
        <Route path="/inspecReqList" element={<InspecReqList />} />
        <Route path="/supplierDetails/:id" element={<SupplierDetails />} />
        <Route path="/supplierDetails" element={<SupplierDetails />} />
        <Route path="/supplierAddForm" element={<SupplierAddForm />} />
        <Route path="/supplierRemove/:id" element={<SupplierRemove />} />
        <Route path="/supplierRemove" element={<SupplierRemove />} />
        <Route path="/supplierUpdate/:id" element={<SupplierUpdate />} />
        <Route path="/supplierUpdate" element={<SupplierUpdate />} />
        <Route path="/supplierMail/:id" element={<SupplierMail />} />
        <Route path="/supplierMail" element={<SupplierMail />} />
        <Route path="/supMemberReqList" element={<SupMemberReqList />} />
        <Route path="/memberReqDetails" element={<MemberReqDetails />} />
        <Route path="/inspecReqDetails" element={<InspecReqDetails />} />
        <Route path="/inspecReqDetails/:id" element={<InspecReqDetails />} />
        <Route path="/memberReqDetails/:id" element={<MemberReqDetails />} />

        <Route path="/supScheduleList" element={<SupScheduleList />} />
        <Route path="/scheduleDetails/:id" element={<ScheduleDetails />} />

        <Route path="/scheduleSupply" element={<ScheduleSupply />} />
        <Route path="/Viewschedules" element={<ViewSchedule />} />
        <Route path="/Updateschedule" element={<UpdateSchedules />} />
        <Route path="/Cancelschedule" element={<CancelSchedules />} />
        <Route path="/SupMemRequest" element={<SupplierMembershipRequest />} />
        <Route path="/Batch" element={<Batch />} />
        <Route path="/batchForm" element={<BatchForm />} />
        <Route path="/UpdateBatch/:id" element={<UpdateBatch />} />

        <Route path="/empHome" element={<Home />} />

        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/ProductForm" element={<ProductForm />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />

        <Route path="/createLeave" element={<LeaveCreateForm />} />
        <Route path="/viewAllLeaves" element={<LeaveList />} />
        <Route path="/deleteLeave" element={<LeaveDelete />} />
        <Route path="/updateLeave/:id" element={<LeaveUpdateForm />} />
      </Routes>
    </div>
  )
}

export default IndexRoutes
