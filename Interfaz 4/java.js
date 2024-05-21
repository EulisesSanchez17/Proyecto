document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo para las solicitudes, becas y pagos
    const solicitudes = [
      { id: 1, tipo: 'Beca por Mérito', periodo: '2024 - Primer Semestre', estado: 'En Proceso' },
      { id: 2, tipo: 'Beca Deportiva', periodo: '2024 - Segundo Semestre', estado: 'Aprobada' },
    ];
  
    const becas = [
      { id: 1, tipo: 'Beca por Mérito', periodo: '2024 - Primer Semestre', monto: '$1000' },
    ];
  
    const pagos = [
      { id: 1, fecha: '2024-03-01', monto: '$500', descripcion: 'Primer pago de beca por mérito' },
    ];
  
    // Función para insertar datos en la tabla de solicitudes
    function populateTable(tableId, data) {
      const tableBody = document.getElementById(tableId).querySelector('tbody');
      tableBody.innerHTML = ''; // Limpiar el contenido actual
      data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });
        tableBody.appendChild(row);
      });
    }
  
    // Poblar las tablas con datos de ejemplo
    populateTable('solicitudes-table', solicitudes);
    populateTable('becas-table', becas);
    populateTable('pagos-table', pagos);
  });
  