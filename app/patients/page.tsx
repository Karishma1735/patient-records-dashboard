"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { PatientCard } from "@/components/patient-card"
import { PatientDetailsModal } from "@/components/patient-details-modal"
import { AddPatientModal } from "@/components/add-patient-modal"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { mockPatients, type Patient } from "@/lib/mock-data"
import { Search, Plus, Users } from "lucide-react"

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(mockPatients)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  // Filter patients based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.contact.includes(searchQuery),
  )

  const handleViewDetails = (patient: Patient) => {
    setSelectedPatient(patient)
    setIsDetailsModalOpen(true)
  }

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false)
    setSelectedPatient(null)
  }

  const handleAddPatient = (newPatient: Patient) => {
    setPatients((prev) => [newPatient, ...prev])
  }

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Users className="w-8 h-8 text-primary" />
              Patient Records
            </h1>
            <p className="text-muted-foreground mt-1">Manage and view patient information</p>
          </div>
          <Button className="sm:w-auto" onClick={handleOpenAddModal}>
            <Plus className="w-4 h-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search patients by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 max-w-md"
          />
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPatients.length} of {patients.length} patients
          </p>
        </div>

        {/* Patient Grid */}
        {filteredPatients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} onViewDetails={handleViewDetails} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No patients found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "Try adjusting your search terms" : "No patients have been added yet"}
            </p>
            <Button onClick={handleOpenAddModal}>
              <Plus className="w-4 h-4 mr-2" />
              Add First Patient
            </Button>
          </div>
        )}
      </main>

      {/* Patient Details Modal */}
      <PatientDetailsModal patient={selectedPatient} open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen} />

      <AddPatientModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} onAddPatient={handleAddPatient} />
    </div>
  )
}
