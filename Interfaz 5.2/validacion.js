document.getElementById('beca-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario para la validación
  
    // Limpiar mensajes de error previos
    document.querySelectorAll('.error-message').forEach(function(element) {
      element.textContent = '';
    });
  
    // Validación de cada campo
    let isValid = true;
  
    // Tipo de Beca
    const tipoBeca = document.getElementById('tipo-beca');
    if (tipoBeca.value === '') {
      isValid = false;
      document.getElementById('tipo-beca-error').textContent = 'Seleccione un tipo de beca.';
    }
  
    // Fecha de Elaboración
    const fechaElaboracion = document.getElementById('fecha-elaboracion');
    if (fechaElaboracion.value === '') {
      isValid = false;
      document.getElementById('fecha-elaboracion-error').textContent = 'Seleccione una fecha de elaboración.';
    }
  
    // Promedio de los Dos Períodos Anteriores
    const promedioPeriodos = document.getElementById('promedio-periodos');
    if (promedioPeriodos.value === '' || promedioPeriodos.value < 0 || promedioPeriodos.value > 10) {
      isValid = false;
      document.getElementById('promedio-periodos-error').textContent = 'Ingrese un promedio válido (0-10).';
    }
  
    // Periodo Académico
    const periodoAcademico = document.getElementById('periodo-academico');
    if (periodoAcademico.value === '') {
      isValid = false;
      document.getElementById('periodo-academico-error').textContent = 'Seleccione un periodo académico.';
    }
  
    // Tipo de Documento
    const tipoDocumento = document.getElementById('tipo-documento');
    if (tipoDocumento.value === '') {
      isValid = false;
      document.getElementById('tipo-documento-error').textContent = 'Seleccione un tipo de documento.';
    }
  
    // Foto
    const foto = document.getElementById('foto');
    if (foto.files.length === 0) {
      isValid = false;
      document.getElementById('foto-error').textContent = 'Suba una fotografía.';
    }
  
    // Apellidos
    const apellidos = document.getElementById('apellidos');
    if (apellidos.value === '') {
      isValid = false;
      document.getElementById('apellidos-error').textContent = 'Ingrese sus apellidos.';
    }
  
    // Edad
    const edad = document.getElementById('edad');
    if (edad.value === '' || edad.value < 0) {
      isValid = false;
      document.getElementById('edad-error').textContent = 'Ingrese una edad válida.';
    }
  
    // Sexo
    const sexo = document.getElementById('sexo');
    if (sexo.value === '') {
      isValid = false;
      document.getElementById('sexo-error').textContent = 'Seleccione su sexo.';
    }
  
    // Dirección
    const direccion = document.getElementById('direccion');
    if (direccion.value === '') {
      isValid = false;
      document.getElementById('direccion-error').textContent = 'Ingrese su dirección de residencia.';
    }
  
    // Banco
    const banco = document.getElementById('banco');
    if (banco.value === '') {
      isValid = false;
      document.getElementById('banco-error').textContent = 'Ingrese el nombre del banco.';
    }
  
    // Número de Cuenta
    const numeroCuenta = document.getElementById('numero-cuenta');
    if (numeroCuenta.value === '') {
      isValid = false;
      document.getElementById('numero-cuenta-error').textContent = 'Ingrese el número de cuenta.';
    }
  
    // Tipo de Cuenta
    const tipoCuenta = document.getElementById('tipo-cuenta');
    if (tipoCuenta.value === '') {
      isValid = false;
      document.getElementById('tipo-cuenta-error').textContent = 'Seleccione un tipo de cuenta.';
    }
  
    // Colegio
    const colegio = document.getElementById('colegio');
    if (colegio.value === '') {
      isValid = false;
      document.getElementById('colegio-error').textContent = 'Ingrese el nombre del colegio.';
    }
  
    // Ciudad del Colegio
    const ciudadColegio = document.getElementById('ciudad-colegio');
    if (ciudadColegio.value === '') {
      isValid = false;
      document.getElementById('ciudad-colegio-error').textContent = 'Ingrese la ciudad del colegio.';
    }
  
    // Ingreso Personal
    const ingresoPersonal = document.getElementById('ingreso-personal');
    if (ingresoPersonal.value === '' || ingresoPersonal.value < 0) {
      isValid = false;
      document.getElementById('ingreso-personal-error').textContent = 'Ingrese un ingreso personal válido.';
    }
  
    // Ingreso Familiar
    const ingresoFamiliar = document.getElementById('ingreso-familiar');
    if (ingresoFamiliar.value === '' || ingresoFamiliar.value < 0) {
      isValid = false;
      document.getElementById('ingreso-familiar-error').textContent = 'Ingrese un ingreso familiar válido.';
    }
  
    // Trabaja
    const trabaja = document.getElementById('trabaja');
    if (trabaja.value === '') {
      isValid = false;
      document.getElementById('trabaja-error').textContent = 'Seleccione si trabaja o no.';
    }
  
    // Tipo de Trabajo (si trabaja)
    if (trabaja.value === 'si') {
      const tipoTrabajo = document.getElementById('tipo-trabajo');
      if (tipoTrabajo.value === '') {
        isValid = false;
        document.getElementById('tipo-trabajo-error').textContent = 'Ingrese el tipo de trabajo.';
      }
    }
  
    // Propiedades
    const propiedades = document.getElementById('propiedades');
    if (propiedades.value === '') {
      isValid = false;
      document.getElementById('propiedades-error').textContent = 'Seleccione si tiene propiedades o no.';
    }
  
    // Vehículos
  
    const vehiculos = document.getElementById('vehiculos');
    if (vehiculos.value === '') {
      isValid = false;
      document.getElementById('vehiculos-error').textContent = 'Seleccione si tiene vehículos o no.';
    }
  
    // Número de Miembros en la Familia
    const numMiembrosFamilia = document.getElementById('num-miembros-familia');
    if (numMiembrosFamilia.value === '' || numMiembrosFamilia.value < 0) {
      isValid = false;
      document.getElementById('num-miembros-familia-error').textContent = 'Ingrese un número válido de miembros en la familia.';
    }
  
    // Número de Dependientes
    const numDependientes = document.getElementById('num-dependientes');
    if (numDependientes.value === '' || numDependientes.value < 0) {
      isValid = false;
      document.getElementById('num-dependientes-error').textContent = 'Ingrese un número válido de dependientes.';
    }
  
    // Descripción de la Situación Económica
    const descripcionEconomica = document.getElementById('descripcion-economica');
    if (descripcionEconomica.value === '') {
      isValid = false;
      document.getElementById('descripcion-economica-error').textContent = 'Ingrese una descripción de la situación económica.';
    }
  
    // Nombre de la Primera Referencia
    const referencia1Nombre = document.getElementById('referencia1-nombre');
    if (referencia1Nombre.value === '') {
      isValid = false;
      document.getElementById('referencia1-nombre-error').textContent = 'Ingrese el nombre de la primera referencia.';
    }
  
    // Teléfono de la Primera Referencia
    const referencia1Telefono = document.getElementById('referencia1-telefono');
    if (referencia1Telefono.value === '') {
      isValid = false;
      document.getElementById('referencia1-telefono-error').textContent = 'Ingrese el teléfono de la primera referencia.';
    }
  
    // Nombre de la Segunda Referencia
    const referencia2Nombre = document.getElementById('referencia2-nombre');
    if (referencia2Nombre.value === '') {
      isValid = false;
      document.getElementById('referencia2-nombre-error').textContent = 'Ingrese el nombre de la segunda referencia.';
    }
  
    // Teléfono de la Segunda Referencia
    const referencia2Telefono = document.getElementById('referencia2-telefono');
    if (referencia2Telefono.value === '') {
      isValid = false;
      document.getElementById('referencia2-telefono-error').textContent = 'Ingrese el teléfono de la segunda referencia.';
    }
  
    // Comentarios Adicionales
    const comentarios = document.getElementById('comentarios');
    if (comentarios.value === '') {
      isValid = false;
      document.getElementById('comentarios-error').textContent = 'Ingrese comentarios adicionales.';
    }
  
    // Si todos los campos son válidos, se envía el formulario
    if (isValid) {
      // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a un servidor
      // Por ahora, solo simularé el envío mostrando un mensaje de éxito
      alert('¡Formulario enviado con éxito!');
    }
  });
  