export default {
  dashboard: {
    title: 'Que deseas hacer?'
  },
  navigation: {
    imaging: 'Radiografia',
    inventory: 'Inventario',
    patients: 'Pacientes',
    appointments: 'Citas',
    medication: 'Recetas medicas',
    labs: 'Laboratorio',
    billing: 'Facturas',
    administration: 'Administracion',
    subnav: {
      requests: 'Pedidos',
      items: 'Items',
      completed: 'Completado',
      newRequest: 'New pedido',
      inventoryReceived: 'Inventario recibido',
      reports: 'Reportes',
      patientListing: 'Lista de pacientes',
      newPatient: 'Nuevo paciente',
      thisWeek: 'Esta semana',
      today: 'Hoy',
      search: 'Buscar',
      addAppointment: 'Nueva cita',
      dispense: 'Dispense',
      returnMedication: 'Devolver medicamento',
      invoices: 'Facturas',
      newInvoice: 'Nueva factura',
      prices: 'Precios',
      priceProfiles: 'Perfil de precios',
      lookupLists: 'Lista de busuedas',
      addressFields: 'Campos de dirección',
      loadDb: 'Cargar base de datos',
      users: 'Usuarios',
      newUser: 'Nuevo usuario',
      userRoles: 'Roles'
    },
    actions: {
      logout: 'Salir',
      login: 'Ingresar'
    },
    about: 'Información de HospitalRun'
  },
  user: {
    plusNewUser: '+ nuevo usuario',
    usersPageTile: 'Listado de usuarios'
  },
  admin: {
    addressOptions: 'Opciones de direcciones',
    lookupLists: 'Lista de busqueda',
    loadDb: 'Cargar Base de datos',
    userRoles: 'Roles',
    users: 'Usuarios',
    address: {
      address1Label: 'Texto direccion 1',
      address2Label: 'Texto direccion 2',
      address3Label: 'Texto direccion 3',
      address4Label: 'Texto direccion 4',
      include1Label: 'Incluir 1',
      include2Label: 'Incluir 2',
      include3Label: 'Incluir 3',
      include4Label: 'Incluir 4',
      titles: {
        optionsSaved: 'Opciones guardadas'
      },
      messages: {
        addressSaved: 'las opciones de dirección han sido guardadas'
      },

      newTitle: 'Opciones de dirección',
      editTitle: 'Opciones de dirección',
      addressLabel: 'Direcciones'
    },
    loaddb: {
      progressMessage: 'Por favor espere mientras la base de datos es cargada.',
      progressTitle: 'Cargando ase de datos',
      displayAlertTitle: 'Seleccione un archivo para cargar',
      displayAlertMessage: 'Por favor seleccione un archivo para ser cargado.',
      errorDisplayAlertTitle: 'Error cargando',
      errorDisplayAlertMessage: `La base de datos no fue cargada el error fue: {{error}}`,
      editTitle: 'Cargar bd'
    },
    lookup: {
      deleteValueInventoryTypeMedicationTitle: 'No se puede eliminar el medicamento',
      deleteValueInventoryTypeMedicationMessage: 'El tipo de inventario de medicamentos no se pueden eliminar porque se necesita para el módulo de medicación.',
      deleteValueLabPricingTypeProcedureTitle: 'No se puede eliminar el tipo de precio',
      deleteValueLabPricingTypeProcedureMessage: 'El tipo de precio Procedimiento Lab no se puede eliminar porque es necesaria para el módulo de laboratorios.',
      deleteValueImagingPricingTypeProcedureTitle: 'No se puede eliminar el tipo de imagen',
      deleteValueImagingPricingTypeProcedureMessage: 'No se puede eliminar porque es necesario para el modulo de radiografias',
      deleteValueVisitTypeAdmissionTitle: 'No se puede eliminar admision tipo visita',
      deleteValueVisitTypeAdmissionMessage: 'Tipo de visita es necesaria para el modulo de admisiones.',
      deleteValueVisitTypeImagingTitle: 'No se puede eliminar el tipo radiografia',
      deleteValueVisitTypeImagingMessage: 'No se puede eliminar por que es necesario para el modulo de radiografias.',
      deleteValueVisitTypeLabTitle: 'No se puede eliminar el tipo laboratorio',
      deleteValueVisitTypeLabMessage: 'Es necesario para el modulo de laboratorio.',
      deleteValueVisitTypePharmacyTitle: 'No se puede eliminar el tipo farmacia',
      deleteValueVisitTypePharmacyMessage: 'Es requerido por el modulo de recetas.',
      alertImportListTitle: 'Seleccione un archivo para importar',
      alertImportListMessage: 'Por favor seleccione un archivo para importar.',
      alertImportListSaveTitle: 'Lista importada',
      alertImportListSaveMessage: 'Lista de busqueda importada.',
      alertImportListUpdateTitle: 'Lista salvada',
      alertImportListUpdateMessage: 'La lista de busqueda ha sido salvada.',
      pageTitle: 'Listas de busqueda',
      edit: {
        template: {
          addTitle: 'Adicionar valor',
          editTitle: 'Editar valor',
          updateButtonTextAdd: 'Adicionar',
          updateButtonTextUpdate: 'Actualizar',
          labelTitle: 'Valor'
        }
      },
      anesthesiaTypes: 'Tipos de anestesia',
      anesthesiologists: 'Anestesiologo',
      billingCategories: 'Categorias de facturacion',
      clinicList: 'Ubicacion de las clinicas',
      countryList: 'Paises',
      diagnosisList: 'Diagnosticos',
      cptCodeList: 'Codigos CPT',
      expenseAccountList: 'Cuentas de gastos',
      aisleLocationList: 'Ubicacion de inventario de pasillo',
      warehouseList: 'Ubicacciones de inventarios',
      inventoryTypes: 'Tipos de inventarios',
      imagingPricingTypes: 'Tipos de precios de radiografias',
      labPricingTypes: 'Precios de laboratorio',
      patientStatusList: 'Lista de estado de pacientes',
      physicianList: 'Medicos',
      procedureList: 'Procedimientos',
      procedureLocations: 'Ubicacion de los procedimientos',
      procedurePricingTypes: 'Tipos de procedimientos y precios',
      radiologists: 'Radiologo',
      unitTypes: 'Tipos de unidad',
      vendorList: 'Proveedor',
      visitLocationList: 'Lugares de visista',
      visitTypes: 'Tipos de visita',
      wardPricingTypes: 'Tipos de las tarifas'
    },
    roles: {
      capability: {
        admin: 'Administracion',
        loadDb: 'Cargar base de datos',
        updateConfig: 'Actualizar configuracion',
        appointments: 'Citas',
        addAppointment: 'Adicionar cita',
        billing: 'Facturacion',
        addCharge: 'Adicionar cargo (valor)',
        addPricing: 'Adicionar precio',
        addPricingProfile: 'Adicionar perfil de precios',
        addInvoice: 'Adicionar factura',
        addPayment: 'Adicionar pago',
        deleteInvoice: 'Eliminar factura',
        deletePricing: 'Eliminar precio',
        deletePricingProfile: 'Eliminar perfil de precio',
        editInvoice: 'Editar factura',
        invoices: 'Facturas',
        overrideInvoice: 'Sobreescribir factura',
        pricing: 'Precio',
        patients: 'Pacientes',
        addDiagnosis: 'Adicionar diagnostico',
        addPhoto: 'Adicionar foto',
        addPatient: 'Adicionar paciente',
        addVisit: 'Adicionar visita',
        addVitals: 'Adicionar partes vitales',
        admitPatient: 'Admitir paciente',
        deletePhoto: 'Eliminar foto',
        deletePatient: 'Eliminar paciente',
        deleteAppointment: 'Eliminar cita',
        deleteDiagnosis: 'Eliminar diagnostico',
        deleteProcedure: 'Eliminar procedimiento',
        deleteSocialwork: 'Eliminar trabajo social',
        deleteVitals: 'Eliminar organo vital',
        deleteVisit: 'Eliminar visita',
        dischargePatient: 'Descartar paciente',
        patientReports: 'Reportes por paciente',
        visits: 'Visitas',
        medication: 'Medicación',
        addMedication: 'Adicionar medicación',
        deleteMedication: 'Eliminar medicación',
        fulfillMedication: 'Cumplir la medicación',
        labs: 'Laboratorios',
        addLab: 'Adicionar laboratorio',
        completeLab: 'Completar laboratorio',
        deleteLab: 'Eliminar laboratorio',
        imaging: 'Radiografia',
        addImaging: 'Adicionar radiografia',
        completeImaging: 'Completar radiografia',
        deleteImaging: 'Eliminar radiografia',
        inventory: 'Inventario',
        addInventoryRequest: 'Pedido de inventario',
        addInventoryItem: 'Adicionar elemento al inventario',
        addInventoryPurchase: 'Adicionar compra',
        adjustInventoryLocation: 'Ajustar lugar elemento en el inventario',
        deleteInventoryItem: 'Eliminar elemento del inventario',
        deleteInventoryPurchase: 'Eliminar compra del inventario',
        fulfillInventory: 'Cumplimiento de inventario',
        userRoles: 'Roles de usuario'
      },
      messages: {
        roleSaved: 'El {{roleName}} rol ha sido salvado.'
      },
      titles: {
        roleSaved: 'Role salvado'
      }
    }
  },
  labels: {
    cptcode: 'Codigo CPT',
    loading: 'Cargando',
    name: 'Nombre',
    patient: 'Paciente',
    quantity: 'Cantidada',
    requestedOn: 'Pedido On',
    date: 'Fecha',
    dateOfBirth: 'Fecha de nacimiento',
    dateOfBirthShort: 'FDN',
    dateRequested: 'Fecha de pedido',
    dateCompleted: 'Fecha completada',
    description: 'Descripción',
    requestedBy: 'Pedido por|',
    fulfill: 'Cumplomiento',
    fulfillRequest: 'Pedido de cumplimiento',
    fulfillRequestNow: 'Pedido de cumplimiento ahora',
    actions: 'Acciones',
    action: 'Accion',
    notes: 'Notas',
    edit: 'Editar',
    imageOrders: 'Ordenes de radiografias',
    labOrders: 'Ordenes de laboratorio',
    patientHistory: 'Historia del paciente',
    imagingType: 'Tipo de radiografia',
    result: 'Resultado',
    results: 'Resultados',
    visit: 'Visita',
    requests: 'Pedido',
    completed: 'Completado',
    id: 'Id',
    on: 'on',
    type: 'Tipo',
    sex: 'Genero',
    age: 'Edad',
    username: 'Nombre de usuario',
    email: 'Email',
    role: 'Rol',
    delete: 'Eliminar',
    userCanAddNewValue: 'Los usuarios pueden agregar nuevos valores',
    value: 'Valor',
    lookupType: 'Tipo de busqueda',
    importFile: 'Importar archivo',
    fileLoadSuccessful: 'Archivo cargado exitosamente',
    fileToLoad: 'Archivo cargado',
    startTime: 'Hora de inicio',
    startDate: 'Fecha de inicio',
    endTime: 'Hora de finalización',
    endDate: 'Fecha final',
    docRead: 'Leer documento',
    docWritten: 'Documento escrito',
    displayName: 'Nombre para mostrar',
    password: 'Contraseña',
    editUser: 'Editar usuario',
    newUser: 'Nuevo usuario',
    deleteUser: 'Eliminar usuario',
    medication: 'Medicación',
    status: 'Estado',
    addNewOutpatientVisit: '--Nueva visita a paciente externo--',
    prescription: 'Receta medica',
    prescriptionDate: 'Fecha de la receta medica',
    billTo: 'Facturar a',
    pullFrom: 'Traer de',
    fulfilled: 'Cumplido',
    deleteRequest: 'Eliminar pedido',
    location: 'Ubicacion',
    provider: 'Proveedor',
    with: 'con',
    allDay: 'Todo el dia',
    physician: 'Médico',
    assisting: 'Asistencia',
    anesthesia: 'Anestesia',
    procedures: 'Procedimiento'
  },
  messages: {
    noItemsFound: 'Elementos no encontrados.',
    noHistoryAvailable: 'Historia no disponible.',
    createNewRecord: 'Crear un nuevo registro?',
    createNewUser: 'Crear un nuevo usuario?',
    noUsersFound: 'Ningun usuario encontrado.',
    areYouSureDelete: 'Estas seguro de eliminar este usuario {{user}}?',
    userHasBeenSaved: 'El usuario ha sido salvado.',
    userSaved: 'Usuario salvado',
    onBehalfOf: 'a nombre de',
    newPatientHasToBeCreated: 'Un nuevo paciente debe ser creado...Por favor espere..',
    noNotesAvailable: 'No hay notas clínicas adicionales están disponibles para esta visita.',
    sorry: 'Lo sentimos, un error ha ocurrido...',
    forAuthorizedPersons: 'Este informe es sólo para personas autorizadas.'
  },
  alerts: {
    please_wait: 'Por favor espere'
  },
  buttons: {
    complete: 'Completado',
    cancel: 'Cancelar',
    close: 'Cerrar',
    return_button: 'Regresar',
    barcode: 'Codigo de barras',
    add: 'Adicionar',
    update: 'Actualizar',
    ok: 'Ok',
    fulfill: 'Cumplimiento',
    remove: 'Remover',
    delete: 'Eliminar',
    new_user: 'Nuevo usuario',
    add_value: 'Adicionar valor',
    new_note: 'Nueva nota',
    import: 'Importar',
    load_file: 'Cargar archivo',
    new_request: 'Nueva solicitud',
    all_requests: 'Todas las solicitudes',
    dispense: 'Repartir',
    new_item: '+ nuevo elemento',
    new_request_plus: '+ nuevo pedido',
    add_visit: 'Adicionar visita',
    search: 'Buscar'
  },
  login: {
    messages: {
      sign_in:  'por favor ingrese',
      error:    'Nombre de usuario o clave incorrectos.'
    },
    labels: {
      password: 'Clave',
      username: 'Nombre de usuario',
      sign_in:  'Ingresar'
    }
  },
  inventory: {
    edit: {
      cost: 'Costo por unidad:',
      delivered: 'Enviado A:',
      location: 'Cambio de ubicación:',
      prescription: 'Recetado por:',
      pulled: 'Pulled From:',
      quantity: 'Quantity at Completion:',
      reason: 'Razón:',
      returned: 'Regresado al paciente:',
      transferred_from: 'Transferido a:',
      transferred_to: 'Transferido a:'
    },
    labels: {
      action: 'Acción',
      add: 'Adicionar',
      adjust: 'Adjustar',
      adjustment_date: 'Fecha de ajuste',
      adjustment_for: 'Ajustado para',
      adjustment_type: 'Tipo de ajuste',
      aisle: 'Pasillo',
      aisle_location: 'Ubicación pasillo',
      all_inventory: 'Todo el inventario',
      bill_to: 'Facturao a',
      consume_purchases: 'Consume Purchases',
      consumption_rate: 'Tasa de consumo',
      cost: 'Costo',
      cost_per_unit: 'Costo por Unidad',
      cross_reference: 'Referencia cruzada',
      current_quantity: 'Cantidad actual',
      date_completed: 'Fecha completado',
      date_effective: 'Gecha efectiva',
      date_end: 'Fecha final',
      date_start: 'Fecha inicial',
      date_received: 'Fecha recibido',
      date_tranferred: 'Fecha transferencia',
      days_left: 'Dias restantes',
      delivery_aisle: 'Enviado a pasillo',
      delivery_location: 'Ubicación del envio',
      distribution_unit: 'Unidad de distribución',
      delete_item: 'Eliminar elemento',
      details: 'Detalles',
      edit_item: 'Editar elemento',
      expense: 'Gastos a',
      expiration_date: 'Fecha de vencimiento',
      fulfill_request: 'Pedido de cumplimiento',
      fulfill_request_now: 'Pedido de incumplimiento para hoy',
      gift: 'Regalo en especie',
      gift_usage: 'Uso del regalo en especie',
      gift_in_kind_no: 'N',
      gift_in_kind_yes: 'Y',
      inventory_consumed: 'Inventario consumido',
      inventory_item: 'Elemento del inventario',
      inventory_obsolence: 'Obsolescencia de inventario',
      invoice_items: 'Articulos de factura',
      invoice_line_item: 'Elemento de la factura linea',
      invoice_number: 'Factura numero',
      item: 'Elemento',
      items: 'Elementos',
      item_number: 'Numero de elemento',
      location: 'Ubicación',
      locations: 'Ubicaciones',
      name: 'Nombre',
      mark_as_consumed: 'Marcar como consumido',
      new_item: 'Nuevo elemento',
      original_quantity: 'Cantidad original',
      print: 'Imprimir',
      print_barcode: 'Imprimir codigo de  barras',
      printer: 'Impresora',
      pull_from: 'Traido de',
      purchases: 'Compras',
      purchase_cost: 'Costo de compra',
      purchase_info: 'Informacion de la compra',
      quantity: 'Cantidad ({{unit}})',
      quantity_available: 'Cantidad disponible',
      quantity_on_hand: 'Cantidad a la mano',
      quantity_requested: 'Cantidad pedida',
      rank: 'Ranking',
      reason: 'Razón',
      remove: 'Remover',
      reorder_point: 'Reordenar punto',
      requested_items: 'Elementos solicitados',
      sale_price_per_unit: 'Costo de venta por unidad',
      save: 'Guardar',
      serial_number: 'Serial/Numero de lote',
      total: 'Total',
      total_cost: 'Costo total',
      total_received: 'Total Recivido: {{total}}',
      transaction: 'Transaccion',
      transactions: 'Transacciones',
      transfer: 'Translados',
      transfer_from: 'Translado desde',
      transfer_to: 'Translado a ubicación',
      transfer_to_aisle: 'Translado a pasillo',
      unit: 'Unidad',
      unit_cost: 'Unidad Costo',
      vendor: 'Proveedor',
      vendor_item_number: 'Proveedor numero de elemento',
      xref: 'XRef'
    },
    messages: {
      adjust: 'Por favor ajust las cantidades en la ubicación adecuada(s) la diferencia de la cuenta es {{difference}}.',
      create_request: 'Crear un nuevo pedido?',
      delete: 'Estas seguro de eliminar {{name}}?',
      item_not_found: 'El elemento del inventario <strong>{{item}}</strong> no se pudo encontrar.<br>Si desea crear un nuevo elemento, Ingrese la información abajo.<br>De lo contrario opria cancelar para volver.',
      loading: 'Cargando transacciones ...',
      purchase_saved: 'La compra de inventario ha sido salvada.',
      no_requests: 'No se encontraron pedidos.',
      no_items: 'No se encontraron elementos.',
      quantity: 'La cantidad total <strong>({{quantity}})</strong> no encaja con la cantidad total en las ubicaciones <strong>({{locationQuantity}})</strong>.',
      remove_item: 'Esta seguro de eliminar este elemento de la factura?',
      remove_item_request: 'Seguro que quiere eliminar este elemento del pedido?',
      request_fulfilled: 'El pedido de inventario ha sido procesado.',
      request_updated: 'El pedido de inventario ha sido actualizado.',
      warning: 'Valide los campos requeridos (marcados con *) corrija los errores antes de adicionar.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustes',
        adjustments_total: 'Ajustes totales',
        balance_begin: 'Balance inicial',
        balance_end: 'Balance Final',
        category: 'Categoria',
        consumed: 'Consumado',
        consumed_gik: 'GiK Consumido',
        consumed_gik_total: 'Total GiK Consumido',
        consumed_puchases: 'Total de lo comprado consumido',
        consumed_purchases_total: 'Total de lo comprado consumido',
        consumed_total: 'Total consumido',
        err_in_fin_sum: 'Error en _generateFinancialSummaryReport: ',
        err_in_find_pur: 'Error en _findInventoryItemsByPurchase: ',
        err_in_find_req: 'Error en _findInventoryItemsByRequest: ',
        expenses_for: 'Gatos para: ',
        no_account: '(No Cuenta)',
        subtotal: 'Subtotal: ',
        subtotal_for: 'Subtotal para {{category}} - {{account}}: ',
        total: 'Total: ',
        total_for: 'Total para {{var}}: ',
        total_purchases: 'Compras Totales',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'De: {{source}} A: {{target}}'
      },
      adjustment: 'Ajuste detallado',
      days_supply: 'Dias de inventario restante',
      expense_detail: 'Gastos detallados',
      expense_sum: 'Resumen de gastos',
      expiration: 'Fecha de expiracion',
      export: 'Exportar reporte',
      fields: 'Campos a incluir',
      finance: 'Resumen de finanzas',
      generate: 'Generar reporte',
      inv_location: 'Inventario por ubicacion',
      inv_valuation: 'Inventario por valoracion',
      purchase_detail: 'Compras detalladas',
      purchase_sum: 'Resumen de compras',
      report_type: 'Tipo de reporte',
      stock_transfer_detail: 'Detalle de traslado de stock',
      stock_transfer_sum: 'Resumen traslado de stock',
      stock_usage_detail: 'Detalle de uso de stock',
      stock_usage_sum: 'Resumen uso de stock'
    },
    titles: {
      add_purchase: 'Adicionar compra',
      add_request: 'Nuevo pedido',
      adjustment: 'Ajuste',
      edit_purchase: 'Editar compra',
      edit_request: 'Editar pedido',
      inventory_item: 'Nuevo elemento de inventario',
      inventory_report: 'Reporte de inventario',
      purchase_saved: 'Compras de inventario guardadas',
      quick_add_title: 'Nuevo elemento de inventario',
      remove_item: 'Remover elemento',
      request_fulfilled: 'Pedido cumplido',
      request_updated: 'Pedido actualizado',
      transfer: 'Trasladar elementos',
      warning: 'Peligro!!!!!'
    }
  },
  imaging: {
    page_title: 'Pedido de radriografia',
    section_title: 'Radiografias',
    buttons: {
      new_button: '+ new radiografia'
    },
    labels: {
      radiologist: 'Radiologo',
      add_new_visit: '--Adicionar nueva visita--'
    },
    messages: {
      no_completed: 'No de items encontrados.'
    },
    titles: {
      completed_imaging: 'Radiografia completada',
      edit_title: 'Pedido de edicion de radiografia',
      new_title: 'Nuevo pedido de radiografia'
    },
    alerts: {
      completed_title: 'Pedido de radiografia completado',
      completed_message: 'El pedido de radiografia ha sido completado.',
      saved_title: 'Pedido de radiografia salvado',
      saved_message: 'El pedido de radiografia ha sido guardado.'
    }
  },
  medication: {
    page_title: 'Pedido de medicación',
    section_title: 'Medication',
    return_medication: 'Retorno de medicación',
    buttons: {
      dispense_medication: 'dispensar medicación',
      new_button: '+ nuevo pedido',
      return_medication: 'debolver medicacion'
    },
    titles: {
      completed_medication: 'Medicacion completada',
      edit_medication_request: 'Editar pedido de medicacion',
      new_medication_request: 'Nuevo pedido de medicacion'
    },
    messages: {
      create_new: 'Crear un nuevo pedido de medicacion?',
      confirm_deletion: 'Estas seguro de eliminar este pedido de medicación?'
    },
    labels: {
      refills: 'Recargas',
      quantity_requested: 'Cantidad solicitada',
      quantity_dispensed: 'Cantidad dispensada',
      quantity_distributed: 'Cantidad distribuida',
      quantity_to_return: 'Cantidad a devolver',
      return_location: 'Retornar a ubicación',
      return_aisle: 'Devolve a pasillo',
      return_reason: 'Razon por la que se devuelve/Nota',
      adjustment_date: 'Fecha de ajuste',
      credit_to_account: 'Credito a cuenta'
    },
    alerts: {
      returned_title: 'Medicacion devuelta',
      returned_message:  'La medicacion ha sido marcada para devolver.',
      saved_title: 'Pedido de medicacion guardado',
      saved_message: 'La elemento de medicación ha sido guardado.',
      fulfilled_title: 'Pedido de medicación cumplido'
    }
  },
  appointments: {
    current_screen_title: 'Listado de citas',
    edit_title: 'Editar cita',
    new_title: 'Nueva cita',
    section_title: 'Citas',
    this_week: 'Citas esta semana',
    missed: 'Citas perdidas',
    search_title: 'Buscar citas',
    today_title: 'Citas para hoy',
    messages: {
      delete_appointment_message: 'Esta seguro de eliminar esta cita?',
      end_time_later_than_start: 'Seleccione una hora de finalizacion despues de la de inicio.'
    },
    buttons: {
      new_button: '+ nueva cita'
    }
  },
  visits: {
    edit: {
      buttons: {
        new_appointment: 'Nuevas citas',
        add_diagnosis: 'Adicionar diagnostico',
        new_procedure: 'Nuevo procedimiento',
        new_lab: 'New laboratorio',
        new_medication: 'Nueva mediicación',
        new_imaging: 'Nueva radiografia'
      },
      labels: {
        diagnosis: 'Diagnostico',
        procedure: 'Procedimiento',
        authored_by: 'Escrito por',
        labs: 'Laboratorios',
        imaging: 'Radiografias',
        visit_information: 'Informacion de visita'
      }
    }
  },
  labs: {
    section_title: 'Laboratorios',
    requests_title: 'Pedido de laboratorio',
    edit_title: 'Editar pedido de laboratorio',
    new_title: 'Nuevo pedido de laboratorio',
    delete_title: 'Eliminar pedido',
    completed_title: 'Completar laboratorio',
    labels: {
      lab_type: 'Tipo de laboratorio',
      add_new_visit: '--Adicionar nueva visita--'
    },
    messages: {
      no_items_found: 'No boratorios encontrados.',
      create_new_record: 'Crear un registro?',
      confirm_deletion: 'Esta seguro de eliminar esta solicitud de laboratorio?',
      no_completed: 'No elementos completados encontrados.'
    },
    buttons: {
      new_button: '+ nuevo laboratorio'
    },
    alerts: {
      request_completed_title: 'Pedido de laboratorio competado',
      request_completed_message: 'El pedido de laboratorio ha sido completado.',
      request_saved_title: 'Silicitud de laboratorio guardado',
      request_saved_message: 'El pedido de laboratorio ha sido guardado.'
    }
  },
  common: {
    actions: 'Acciones'
  },
  patients: {
    notes: {
      on_behalf_of_label: 'A nombre de',
      on_behalf_of_copy: 'a nombre de',
      please_select_a_visit: 'Por favor seleccione una visista',
      note_label: 'Nota'
    }
  }
};
