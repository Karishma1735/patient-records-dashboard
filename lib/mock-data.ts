export interface Patient {
  id: string
  name: string
  age: number
  contact: string
  email: string
  address: string
  medicalHistory: string[]
  lastVisit: string
  nextAppointment?: string
  bloodType: string
  allergies: string[]
  emergencyContact: {
    name: string
    relationship: string
    phone: string
  }
}

export const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 34,
    contact: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Main St, New York, NY 10001",
    medicalHistory: ["Hypertension", "Type 2 Diabetes"],
    lastVisit: "2024-01-15",
    nextAppointment: "2024-02-20",
    bloodType: "A+",
    allergies: ["Penicillin", "Shellfish"],
    emergencyContact: {
      name: "John Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 123-4568",
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    age: 28,
    contact: "+1 (555) 234-5678",
    email: "michael.chen@email.com",
    address: "456 Oak Ave, Los Angeles, CA 90210",
    medicalHistory: ["Asthma"],
    lastVisit: "2024-01-10",
    nextAppointment: "2024-02-15",
    bloodType: "B-",
    allergies: ["Dust mites"],
    emergencyContact: {
      name: "Lisa Chen",
      relationship: "Sister",
      phone: "+1 (555) 234-5679",
    },
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    age: 45,
    contact: "+1 (555) 345-6789",
    email: "emily.rodriguez@email.com",
    address: "789 Pine St, Chicago, IL 60601",
    medicalHistory: ["Migraine", "Anxiety"],
    lastVisit: "2024-01-08",
    bloodType: "O+",
    allergies: ["Latex"],
    emergencyContact: {
      name: "Carlos Rodriguez",
      relationship: "Husband",
      phone: "+1 (555) 345-6790",
    },
  },
  {
    id: "4",
    name: "David Thompson",
    age: 52,
    contact: "+1 (555) 456-7890",
    email: "david.thompson@email.com",
    address: "321 Elm St, Houston, TX 77001",
    medicalHistory: ["High Cholesterol", "Arthritis"],
    lastVisit: "2024-01-12",
    nextAppointment: "2024-02-25",
    bloodType: "AB+",
    allergies: ["None known"],
    emergencyContact: {
      name: "Mary Thompson",
      relationship: "Wife",
      phone: "+1 (555) 456-7891",
    },
  },
  {
    id: "5",
    name: "Jessica Williams",
    age: 29,
    contact: "+1 (555) 567-8901",
    email: "jessica.williams@email.com",
    address: "654 Maple Dr, Phoenix, AZ 85001",
    medicalHistory: ["Thyroid disorder"],
    lastVisit: "2024-01-18",
    nextAppointment: "2024-02-18",
    bloodType: "A-",
    allergies: ["Iodine"],
    emergencyContact: {
      name: "Robert Williams",
      relationship: "Father",
      phone: "+1 (555) 567-8902",
    },
  },
  {
    id: "6",
    name: "Robert Davis",
    age: 67,
    contact: "+1 (555) 678-9012",
    email: "robert.davis@email.com",
    address: "987 Cedar Ln, Miami, FL 33101",
    medicalHistory: ["Heart disease", "Diabetes", "Hypertension"],
    lastVisit: "2024-01-20",
    nextAppointment: "2024-02-10",
    bloodType: "O-",
    allergies: ["Aspirin"],
    emergencyContact: {
      name: "Helen Davis",
      relationship: "Wife",
      phone: "+1 (555) 678-9013",
    },
  },
  {
    id: "7",
    name: "Amanda Brown",
    age: 31,
    contact: "+1 (555) 789-0123",
    email: "amanda.brown@email.com",
    address: "147 Birch St, Seattle, WA 98101",
    medicalHistory: ["Depression", "Back pain"],
    lastVisit: "2024-01-14",
    bloodType: "B+",
    allergies: ["Codeine"],
    emergencyContact: {
      name: "James Brown",
      relationship: "Brother",
      phone: "+1 (555) 789-0124",
    },
  },
  {
    id: "8",
    name: "Christopher Wilson",
    age: 39,
    contact: "+1 (555) 890-1234",
    email: "christopher.wilson@email.com",
    address: "258 Spruce Ave, Denver, CO 80201",
    medicalHistory: ["Kidney stones"],
    lastVisit: "2024-01-16",
    nextAppointment: "2024-02-22",
    bloodType: "AB-",
    allergies: ["Sulfa drugs"],
    emergencyContact: {
      name: "Patricia Wilson",
      relationship: "Wife",
      phone: "+1 (555) 890-1235",
    },
  },
]
