"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Patient } from "@/lib/mock-data"
import { Phone, Mail, Calendar, User } from "lucide-react"

interface PatientCardProps {
  patient: Patient
  onViewDetails: (patient: Patient) => void
}

export function PatientCard({ patient, onViewDetails }: PatientCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-card-foreground">{patient.name}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Age {patient.age}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {patient.bloodType}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{patient.contact}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground truncate">{patient.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
            </span>
          </div>
        </div>

        {patient.medicalHistory.length > 0 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Medical History:</p>
            <div className="flex flex-wrap gap-1">
              {patient.medicalHistory.slice(0, 2).map((condition, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {condition}
                </Badge>
              ))}
              {patient.medicalHistory.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{patient.medicalHistory.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}

        <Button onClick={() => onViewDetails(patient)} className="w-full mt-4" size="sm">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
