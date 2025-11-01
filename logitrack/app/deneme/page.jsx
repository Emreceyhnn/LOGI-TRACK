"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { createVehicle, getAllVehicles } from "@/lib/vehicle"; // prisma crud fonksiyonları

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    plate: "",
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    kilometer: "",
    lastServiceKm: "",
    status: "active",
    insuranceExpiry: "",
    insuranceStatus: "ok",
    serviceStatus: "ok",
    companyId: null,
  });

  useEffect(() => {
    loadVehicles();
  }, []);

  async function loadVehicles() {
    setLoading(true);
    try {
      const data = await getAllVehicles(3); // şirket id
      setVehicles(data);
    } catch (error) {
      console.error("Araçlar alınamadı:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddVehicle(e) {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        year: formData.year ? Number(formData.year) : null,
        kilometer: Number(formData.kilometer),
        lastServiceKm: Number(formData.lastServiceKm),
        insuranceExpiry: new Date(formData.insuranceExpiry),
      };

      await createVehicle(payload); // ✅ burası önemli
      await loadVehicles();
      setFormData({
        plate: "",
        brand: "",
        model: "",
        year: "",
        fuelType: "",
        kilometer: "",
        lastServiceKm: "",
        status: "active",
        insuranceExpiry: "",
        insuranceStatus: "ok",
        serviceStatus: "ok",
        companyId: null,
      });
    } catch (err) {
      console.error("Araç eklenemedi:", err);
    }
  }

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "plate", headerName: "Plaka", width: 120 },
    { field: "brand", headerName: "Marka", width: 130 },
    { field: "model", headerName: "Model", width: 130 },
    { field: "year", headerName: "Yıl", width: 90 },
    { field: "fuelType", headerName: "Yakıt", width: 110 },
    { field: "kilometer", headerName: "KM", width: 100 },
    { field: "lastServiceKm", headerName: "Servis KM", width: 120 },
    {
      field: "status",
      headerName: "Durum",
      width: 120,
      renderCell: (params) => (
        <Box
          sx={{
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor:
              params.value === "active"
                ? "rgba(56,142,60,0.2)"
                : params.value === "maintenance"
                ? "rgba(255,193,7,0.2)"
                : "rgba(244,67,54,0.2)",
            color:
              params.value === "active"
                ? "green"
                : params.value === "maintenance"
                ? "orange"
                : "red",
            fontWeight: 600,
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: "insuranceExpiry",
      headerName: "Sigorta Bitiş",
      width: 150,
      valueGetter: (params) =>
        params.value ? new Date(params.value).toLocaleDateString("tr-TR") : "",
    },
    { field: "insuranceStatus", headerName: "Sigorta", width: 120 },
    { field: "serviceStatus", headerName: "Servis", width: 120 },
  ];

  return (
    <Box sx={{ p: 6, bgcolor: "white", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        🚛 Araç Yönetimi
      </Typography>

      {/* FORM */}
      <Box
        component="form"
        onSubmit={handleAddVehicle}
        sx={{
          mb: 6,
          p: 3,
          borderRadius: 2,
          backgroundColor: "#f8fafc",
          border: "1px solid #cbd5e1",
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={2}>
          Yeni Araç Ekle
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              label="Plaka"
              fullWidth
              value={formData.plate}
              onChange={(e) =>
                setFormData({ ...formData, plate: e.target.value })
              }
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Marka"
              fullWidth
              value={formData.brand}
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Model"
              fullWidth
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Yıl"
              type="number"
              fullWidth
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Yakıt Türü"
              select
              fullWidth
              value={formData.fuelType}
              onChange={(e) =>
                setFormData({ ...formData, fuelType: e.target.value })
              }
              required
            >
              <MenuItem value="Diesel">Dizel</MenuItem>
              <MenuItem value="Gasoline">Benzin</MenuItem>
              <MenuItem value="Hybrid">Hibrit</MenuItem>
              <MenuItem value="Electric">Elektrik</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Kilometre"
              type="number"
              fullWidth
              value={formData.kilometer}
              onChange={(e) =>
                setFormData({ ...formData, kilometer: e.target.value })
              }
              required
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Son Servis KM"
              type="number"
              fullWidth
              value={formData.lastServiceKm}
              onChange={(e) =>
                setFormData({ ...formData, lastServiceKm: e.target.value })
              }
              required
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Sigorta Bitişi"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.insuranceExpiry}
              onChange={(e) =>
                setFormData({ ...formData, insuranceExpiry: e.target.value })
              }
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, textAlign: "right" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#0284c7",
              "&:hover": { backgroundColor: "#0369a1" },
            }}
          >
            Kaydet
          </Button>
        </Box>
      </Box>

      {/* TABLO */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", p: 10 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ height: 600, width: "100%", bgcolor: "#fff" }}>
          <DataGrid
            rows={vehicles}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8, 16, 32]}
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#1e293b",
                color: "#f8fafc",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(56,189,248,0.08)",
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}
