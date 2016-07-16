export default {
  dashboard: {
    title: 'Que voulez-vous faire?'
  },
  navigation: {
    imaging: 'Imagerie',
    inventory: 'Inventaire',
    patients: 'Patients',
    appointments: 'Rendez-vous',
    medication: 'Médicament',
    labs: 'Labos',
    billing: 'Facturation',
    administration: 'Administration',
    subnav: {
      requests: 'Demandes',
      items: 'Articles',
      completed: 'Traité',
      newRequest: 'Nouvelle demande',
      inventoryReceived: 'Inventaire reçu',
      reports: 'Rapports',
      patientListing: 'Liste des patients',
      newPatient: 'Nouveau patient',
      thisWeek: 'Cette semaine',
      today: 'Aujourd\'hui',
      search: 'Rechercher',
      addAppointment: 'Ajouter un rendez-vous',
      dispense: 'Dispenser',
      returnMedication: 'Retourner un Médicament',
      invoices: 'Factures',
      newInvoice: 'Nouvelle facture',
      prices: 'Prix',
      priceProfiles: 'Profils de prix',
      lookupLists: 'Listes de référence',
      addressFields: 'Champs d\'adresse',
      loadDb: 'Importer une BD',
      users: 'Utilisateurs',
      newUser: 'Nouvel utilisateur',
      admittedPatients: 'patients admis',
      missed: 'Manqué',
      userRoles: 'Rôles de l\'utilisateur'
    },
    actions: {
      logout: 'Deconnexion',
      login: 'Connexion'
    },
    about: 'À propos de HospitalRun'
  },
  user: {
    plusNewUser: '+ nouvel utilisateur',
    usersPageTile: 'Liste des Utilisateurs'
  },
  admin: {
    addressOptions: 'Options d\'adresse',
    lookupLists: 'Listes de référence',
    loadDb: 'Importer une BD',
    users: 'Utilisateurs',
    address: {
      address1Label: 'Label de l\'adresse 1',
      address2Label: 'Label de l\'adresse 2',
      address3Label: 'Label de l\'adresse 3',
      address4Label: 'Label de l\'adresse 4',
      include1Label: 'Label de l\'include 1',
      include2Label: 'Label de l\'include 2',
      include3Label: 'Label de l\'include 3',
      include4Label: 'Label de l\'include 4',
      titles: {
        optionsSaved: 'Options enregistrées'
      },
      messages: {
        addressSaved: 'Les options d\'adresse ont été enregistrées'
      },

      newTitle: 'Options d\'adresse',
      editTitle: 'Options d\'adresse',
      addressLabel: 'Adresse'
    },
    loaddb: {
      progressMessage: 'Veuillez patienter durant le chargement de la base de données.',
      progressTitle: 'Chargement de la base de données en cours',
      displayAlertTitle: 'Sélectionner le fichier à télécharger.',
      displayAlertMessage: 'Veuillez sélectionner le fichier à télécharger.',
      errorDisplayAlertTitle: 'Erreur de chargement',
      errorDisplayAlertMessage: 'La base de données ne pouvait pas être importée. L\'erreur etait: {{error}}',
      editTitle: 'Importer une BD'
    },
    lookup: {
      deleteValueInventoryTypeMedicationTitle: 'Impossible de supprimer le médicament',
      deleteValueInventoryTypeMedicationMessage: 'Impossible de supprimer le type d\'inventaire de médicaments car il est requis par le module Médicament.',
      deleteValueLabPricingTypeProcedureTitle: 'Impossible de supprimer le type de prix de Labo',
      deleteValueLabPricingTypeProcedureMessage: 'Impossible de supprimer le type de prix de procédure de Labo car il est requis par le module Labos.',
      deleteValueImagingPricingTypeProcedureTitle: 'Impossible de supprimer le type de prix d\'imagerie',
      deleteValueImagingPricingTypeProcedureMessage: 'Impossible de supprimer le type de prix de procédure d\'imagerie car il est requis par le module Imagerie.',
      deleteValueVisitTypeAdmissionTitle: 'Impossible de supprimer la visite de type Admission',
      deleteValueVisitTypeAdmissionMessage: 'Impossible de supprimer la visite de type Admission car il est requis par le module Visites.',
      deleteValueVisitTypeImagingTitle: 'Impossible de supprimer la visite de type Imagerie',
      deleteValueVisitTypeImagingMessage: 'Impossible de supprimer la visite de type Imagerie car il est requis par le module Imagerie.',
      deleteValueVisitTypeLabTitle: 'Impossible de supprimer la visite de type Labo',
      deleteValueVisitTypeLabMessage: 'Impossible de supprimer la visite de type Labo car il est requis par le module Labo.',
      deleteValueVisitTypePharmacyTitle: 'Impossible de supprimer la visite de type Pharmacie',
      deleteValueVisitTypePharmacyMessage: 'Impossible de supprimer la visite de type Labo car il est requis par le module Médicament.',
      alertImportListTitle: 'Sélectionner le fichier à importer',
      alertImportListMessage: 'Veuillez sélectionner le fichier à importer.',
      alertImportListSaveTitle: 'Liste importée',
      alertImportListSaveMessage: 'La liste de référence a été importée.',
      alertImportListUpdateTitle: 'Liste enregistrée',
      alertImportListUpdateMessage: 'La liste de référence a été enregistrée.',
      pageTitle: 'Listes de référence',
      edit: {
        template: {
          addTitle: 'Ajouter une valeur',
          editTitle: 'Modifier la valeur',
          updateButtonTextAdd: 'Ajouter',
          updateButtonTextUpdate: 'Mettre à jour',
          labelTitle: 'Valeur'
        }
      },
      anesthesiaTypes: 'Types d\'Anesthésie',
      anesthesiologists: 'Anesthésiologistes',
      billingCategories: 'Catégories de facturation',
      clinicList: 'Emplacements de la clinique',
      countryList: 'Pays',
      diagnosisList: 'Diagnostics',
      cptCodeList: 'Codes CPT',
      expenseAccountList: 'Comptes de dépense',
      aisleLocationList: 'Emplacements de rayon d\'inventaire',
      warehouseList: 'Emplacements d\'inventaire',
      inventoryTypes: 'Types d\'inventaire',
      imagingPricingTypes: 'Types de prix d\'imagerie',
      labPricingTypes: 'Types de prix de labo',
      patientStatusList: 'Liste de statut de patient',
      physicianList: 'Médécins',
      procedureList: 'Procédures',
      procedureLocations: 'Emplacements des procédures',
      procedurePricingTypes: 'Types de prix de procédure',
      radiologists: 'Radiologistes',
      unitTypes: 'Types d\'unité',
      vendorList: 'Fournisseur',
      visitLocationList: 'Emplacements de visite',
      visitTypes: 'Types de visite',
      wardPricingTypes: 'Types de prix de service'
    },
    roles: {
      capability: {
        admin: 'Administration',
        loadDb: 'Charger la Base de données',
        updateConfig: 'Mettre à jour les Configurations',
        appointments: 'Rendez-vous',
        addAppointment: 'Ajouter un Rendez-vous',
        billing: 'Facturation',
        addCharge: 'Ajouter une charge',
        addPricing: 'Ajouter un Prix',
        addPricingProfile: 'Ajouter le profil de prix',
        addInvoice: 'Ajouter une facture',
        addPayment: 'Ajouter un paiement',
        deleteInvoice: 'Supprimer une facture',
        deletePricing: 'Supprimer un Prix',
        deletePricingProfile: 'Supprimer le profil de prix',
        editInvoice: 'Modifier la facture',
        invoices: 'Factures',
        overrideInvoice: 'Remplacer la facture',
        pricing: 'Tarification',
        patients: 'Patients',
        addDiagnosis: 'Ajouter un diagnostic',
        addPhoto: 'Ajouter une photo',
        addPatient: 'Ajouter un patient',
        addVisit: 'Ajouter une visite',
        addVitals: 'Ajouter les signes vitaux',
        admitPatient: 'Admettre un patient',
        deletePhoto: 'Supprimer une photo',
        deletePatient: 'Supprimer un patient',
        deleteAppointment: 'Supprimer un rendez-vous',
        deleteDiagnosis: 'Supprimer un diagnostic',
        deleteProcedure: 'Supprimer une procédure',
        deleteSocialwork: 'Supprimer un travail social',
        deleteVitals: 'Supprimer des signes vitaux',
        deleteVisit: 'Supprimer une Visite',
        dischargePatient: 'Liberer un patient',
        patientReports: 'Rapports des patients',
        visits: 'Visites',
        medication: 'Médicament',
        addMedication: 'Ajouter un médicament',
        deleteMedication: 'Supprimer un médicament',
        fulfillMedication: 'Traiter une demande de médicaments',
        labs: 'Test Labo',
        addLab: 'Ajouter un test labo',
        completeLab: 'Completer un test labo',
        deleteLab: 'Supprimer un test labo',
        imaging: 'Imagerie',
        addImaging: 'Ajouter une imagerie',
        completeImaging: 'Completer une imagerie',
        deleteImaging: 'Supprimer une Imagerie',
        inventory: 'Inventaire',
        addInventoryRequest: 'Ajouter une demande d\'inventaire',
        addInventoryItem: 'Ajouter un article d\'inventaire',
        addInventoryPurchase: 'Ajouter un achat d\'inventaire',
        adjustInventoryLocation: 'Ajuster la localisation de l\'inventaire',
        deleteInventoryItem: 'Supprimer un article d\'inventaire',
        deleteInventoryPurchase: 'Supprimer un achat d\'inventaire',
        fulfillInventory: 'Traiter l\'inventaire',
        userRoles: 'Rôles d\'utilisateur'
      },
      messages: {
        roleSaved: 'Le rôle {{roleName}}  a été enregistré.'
      },
      titles: {
        roleSaved: 'Rôle enregistré'
      }
    }
  },
  labels: {
    cptcode: 'Code CPT',
    loading: 'Chargement',
    name: 'Nom',
    patient: 'Patient',
    prescriber: 'prescripteur',
    quantity: 'Quantité',
    requestedOn: 'Demandé le',
    date: 'Date',
    dateOfBirth: 'Date de naissance',
    dateOfBirthShort: 'DdN',
    dateRequested: 'Date de demande',
    dateCompleted: 'Date de traitement',
    description: 'Description',
    requestedBy: 'Demandé par',
    fulfill: 'Traiter',
    fulfillRequest: 'Traiter la demande',
    fulfillRequestNow: 'Traiter la demande maintenant',
    actions: 'Actions',
    action: 'Action',
    notes: 'Notes',
    edit: 'Modifier',
    imageOrders: 'Demandes d\'imagerie',
    labOrders: 'Demandes de labo',
    patientHistory: 'Historique du patient',
    imagingType: 'Type d\'imagerie',
    result: 'Resultat',
    results: 'Resultats',
    visit: 'Visite',
    requests: 'Demandes',
    completed: 'Traité',
    id: 'Id',
    on: 'sur',
    type: 'Type',
    sex: 'Sexe',
    age: 'Age',
    username: 'Nom d\'utilisateur',
    email: 'Email',
    role: 'Rôle',
    delete: 'Supprimer',
    userCanAddNewValue: 'Utilisateur peut ajouter de nouvelles valeurs',
    value: 'Valeur',
    lookupType: 'Type de référence',
    importFile: 'Importer un fichier',
    fileLoadSuccessful: 'Téléchargement reussi',
    fileToLoad: 'Téléchargement de fichier',
    startTime: 'Heure de debut',
    startDate: 'Date de debut',
    endTime: 'Heure de fin',
    endDate: 'Date de fin',
    docRead: 'Documents lus',
    docWritten: 'Documents écrits',
    displayName: 'Nom à afficher',
    password: 'Mot de passe',
    editUser: 'Modifier un utilisateur',
    newUser: 'Nouvel utilisateur',
    deleteUser: 'Supprimer un utilisateur',
    medication: 'Médicament',
    status: 'Statut',
    addNewOutpatientVisit: '--Ajouter une nouvelle consultation externe--',
    prescription: 'Ordonnance',
    prescriptionDate: 'Date de prescription',
    billTo: 'Facturer à',
    pullFrom: 'Tirer de',
    fulfilled: 'Traité',
    deleteRequest: 'Supprimer la demande',
    location: 'Emplacement',
    provider: 'Fournisseur',
    with: 'Avec',
    allDay: 'Toute la journée',
    physician: 'Médecin',
    assisting: 'Assistant',
    anesthesia: 'Anesthésie',
    procedures: 'Procédures'
  },
  messages: {
    noItemsFound: 'Aucun article retrouvé.',
    noHistoryAvailable: 'Aucune historique disponible.',
    createNewRecord: 'Créer un nouveau dossier?',
    createNewUser: 'Créer un nouvel utilisateur?',
    noUsersFound: 'Aucun utilisateur retrouvé.',
    areYouSureDelete: 'Êtes-vous sûr de vouloir supprimer l\'utilisateur {{user}}?',
    userHasBeenSaved: 'L\'utilisateur a été enregistré.',
    userSaved: 'Utilisateur enregistré',
    onBehalfOf: 'de la part de',
    newPatientHasToBeCreated: 'Un nouveau patient doit être crée...Veuillez attendre...',
    noNotesAvailable: 'Aucune note clinique supplémentaire disponible pour cette visite.',
    sorry: 'Désolé, quelque chose a mal tourné ...',
    forAuthorizedPersons: 'Ce rapport est destiné uniquement aux personnes autorisées.'
  },
  alerts: {
    please_wait: 'Veuillez attendre'
  },
  buttons: {
    complete: 'Traiter',
    cancel: 'Annuler',
    close: 'Fermer',
    return_button: 'Retourner',
    barcode: 'Code barre',
    add: 'Ajouter',
    update: 'Mettre à jour',
    ok: 'Ok',
    fulfill: 'Traiter',
    remove: 'Retirer',
    delete: 'Supprimer',
    new_user: 'Nouvel utilisateur',
    add_value: 'Ajouter une valeur',
    new_note: 'Nouvelle note',
    import: 'Importer',
    load_file: 'Télécharger le fichier',
    new_request: 'Nouvelle demande',
    all_requests: 'Toutes les demandes',
    dispense: 'Dispenser',
    new_item: '+ nouvel article',
    new_request_plus: '+ nouvelle demande',
    add_visit: 'Ajouter une visite',
    search: 'Rechercher'
  },
  login: {
    messages: {
      sign_in:  'veuillez-vous connecter',
      error:    'Nom d\'utilisateur ou mot de passe est incorrect.'
    },
    labels: {
      password: 'Mot de passe',
      username: 'Nom d\'utilisateur',
      sign_in:  'Connexion'
    }
  },
  inventory: {
    edit: {
      cost: 'Coût par unité:',
      delivered: 'Livré à:',
      location: 'Emplacement ajusté:',
      prescription: 'Ordonnance pour:',
      pulled: 'Tiré de:',
      quantity: 'Quantité après traitement:',
      reason: 'Motif:',
      returned: 'Retourné par le patient:',
      transferred_from: 'Transféré de:',
      transferred_to: 'Transféré à:'
    },
    labels: {
      action: 'Action',
      add: 'Ajouter',
      adjust: 'Ajuster',
      adjustment_date: 'Date d\'ajustement',
      adjustment_for: 'Ajustement pour',
      adjustment_type: 'Type d\'ajustement',
      aisle: 'Rayon',
      aisle_location: 'Emplacement du rayon',
      all_inventory: 'Toute l\'inventaire',
      bill_to: 'Facturer à',
      consume_purchases: 'Utiliser les achats',
      consumption_rate: 'Taux d\'utilisation',
      cost: 'Coût',
      cost_per_unit: 'Coût par unité',
      cross_reference: 'Reference',
      current_quantity: 'Quantité actuelle',
      date_completed: 'Date de traitement',
      date_effective: 'Date d\'effet',
      date_end: 'Date de fin',
      date_start: 'Date de debut',
      date_received: 'Date de réception',
      date_tranferred: 'Date  de transfert',
      days_left: 'Nombre de jours restant',
      delivery_aisle: 'Rayon de livraison',
      delivery_location: 'Emplacement de livraison',
      distribution_unit: 'Unité de distribution',
      delete_item: 'Supprimer l\'article',
      details: 'Détails',
      edit_item: 'Modifier l\'article',
      expense: 'Dépenses pour',
      expiration_date: 'Date d\'expiration',
      fulfill_request: 'Traiter la demande',
      fulfill_request_now: 'Traiter la demande maintenant',
      gift: 'Don en nature',
      gift_usage: 'Utilisation de don en nature',
      gift_in_kind_no: 'N',
      gift_in_kind_yes: 'O',
      inventory_consumed: 'Inventaire utilisé',
      inventory_item: 'Article à inventorier',
      inventory_obsolence: 'Inventory Obsolence',
      invoice_items: 'Articles de facture',
      invoice_line_item: 'Article de facture',
      invoice_number: 'Numero de facture',
      item: 'Article',
      items: 'Articles',
      item_number: 'Numero d\'article',
      location: 'Emplacement',
      locations: 'Emplacements',
      name: 'Nom',
      mark_as_consumed: 'Marqué comme utilisé',
      new_item: 'Nouvel article',
      original_quantity: 'Quantité originale',
      print: 'Imprimer',
      print_barcode: 'Imprimer le code barre',
      printer: 'Imprimante',
      pull_from: 'Tirer de',
      purchases: 'Achats',
      purchase_cost: 'Coût d\'achat',
      purchase_info: 'Détails de l\'achat',
      quantity: 'Quantité ({{unit}})',
      quantity_available: 'Quantité disponible',
      quantity_on_hand: 'Quantité en main',
      quantity_requested: 'Quantité demandée',
      rank: 'Rang',
      reason: 'Motif',
      remove: 'Retirer',
      reorder_point: 'Point de commande',
      requested_items: 'Articles demandés',
      sale_price_per_unit: 'Prix de vente unitaire',
      save: 'Enregistrer',
      serial_number: 'Numéro de série / lot',
      total: 'Total',
      total_cost: 'Coût total',
      total_received: 'Total reçu: {{total}}',
      transaction: 'Transaction',
      transactions: 'Transactions',
      transfer: 'Transférer',
      transfer_from: 'Transféré de',
      transfer_to: 'Transférer à l\'emplacement',
      transfer_to_aisle: 'Transférer à l\'emplacement du rayon',
      unit: 'Unité',
      unit_cost: 'Coût unitaire',
      vendor: 'Fournisseur',
      vendor_item_number: 'Numéro d\'article fournisseur',
      xref: 'XRef'
    },
    messages: {
      adjust: 'Veuillez ajuster les quantités sur le ou les emplacement(s) appropriée(s) pour tenir compte de la différence de {{difference}}.',
      create_request: 'Créer une nouvelle demande?',
      delete: 'Etes-vous sûr que vous souhaitez supprimer {{name}}?',
      item_not_found: 'L\'article d\'inventaire <strong>{{item}}</strong> ne pouvait pas être retrouvé.<br>Si vous voulez créer un nouvel article d\'inventaire, veuillez saisir les informations ci-dessous. <br>Sinon, appuyez sur le bouton Annuler pour retourner.',
      loading: 'Chargement des transactions en cours…',
      purchase_saved: 'Les achats d\'inventaire ont été enregistrés avec succès.',
      no_requests: 'Aucune demande retrouvée.',
      no_items: 'Aucun article retrouvé.',
      quantity: 'La quantité totale de <strong>({{quantity}})</strong> ne correspond pas à la quantité totale dans les emplacements <strong>({{locationQuantity}})</strong>.',
      remove_item: 'Etes-vous sûr de vouloir retirer cet article de cette facture?',
      remove_item_request: 'Etes-vous sûr de vouloir supprimer cet article de cette demande?',
      request_fulfilled: 'La demande d\'inventaire a été traitée.',
      request_updated: 'La demande d\'inventaire a été mis à jour.',
      warning: 'Veuillez remplir les champs obligatoires (marqués d\'un *) et corriger les erreurs avant d\'ajouter.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustements',
        adjustments_total: 'Ajustements totaux',
        balance_begin: 'Solde d\'ouverture',
        balance_end: 'Solde de clôture',
        category: 'Catégorie',
        consumed: 'Utilisé',
        consumed_gik: 'GiK utilisé',
        consumed_gik_total: 'GiK total utilisé',
        consumed_puchases: 'Achats utilisés',
        consumed_purchases_total: 'Achats totaux utilisés',
        consumed_total: 'Total utilisé',
        err_in_fin_sum: 'Erreur dans _generateFinancialSummaryReport: ',
        err_in_find_pur: 'Erreur dans _findInventoryItemsByPurchase: ',
        err_in_find_req: 'Erreur dans _findInventoryItemsByRequest: ',
        expenses_for: 'Dépenses pour: ',
        no_account: '(Pas de compte)',
        subtotal: 'Sous-total: ',
        subtotal_for: 'Sous-total pour {{category}} - {{account}}: ',
        total: 'Total: ',
        total_for: 'Total pour {{var}}: ',
        total_purchases: 'Achats totaux',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'De: {{source}} A: {{target}}'
      },
      adjustment: 'Ajustement détaillée',
      days_supply: 'Stock restant (en nombre de jours)',
      expense_detail: 'Détails des dépenses',
      expense_sum: 'Résumé des dépenses',
      expiration: 'Date d\'expiration',
      export: 'Exporter un rapport',
      fields: 'Champs à inclure',
      finance: 'Résumé des finances',
      generate: 'Créer un rapport',
      inv_location: 'Inventaire par emplacement',
      inv_valuation: 'Valorisation de l\'inventaire',
      purchase_detail: 'Détails de l\'achat',
      purchase_sum: 'Résumé de l\'achat',
      report_type: 'Type de rapport',
      stock_transfer_detail: 'Transfert détaillé du stock',
      stock_transfer_sum: 'Résumé du transfert du stock',
      stock_usage_detail: 'Utilisation détaillée du stock',
      stock_usage_sum: 'Résumé de l\'utilisation du stock'
    },
    titles: {
      add_purchase: 'Ajouter un achat',
      add_request: 'Nouvelle demande',
      adjustment: 'Ajustement',
      edit_purchase: 'Modifier l\'achat',
      edit_request: 'Modifier la demande',
      inventory_item: 'Nouvel article d\'inventaire',
      inventory_report: 'Rapport d\'inventaire',
      purchase_saved: 'Achats d\'inventaire enregistrés',
      quick_add_title: 'Nouvel article d\'inventaire',
      remove_item: 'Retirer l\'article',
      request_fulfilled: 'Demande traitée',
      request_updated: 'Demande mis à jour',
      transfer: 'Transférer les articles',
      warning: 'Attention!!!!!'
    }
  },
  imaging: {
    page_title: 'Demandes d\'imagerie',
    section_title: 'Imagerie',
    buttons: {
      new_button: '+ nouvelle imagerie'
    },
    labels: {
      radiologist: 'Radiologiste',
      add_new_visit: '--Ajouter une nouvelle visite--'
    },
    messages: {
      no_completed: 'Aucun article traité retrouvé.'
    },
    titles: {
      completed_imaging: 'Imagerie traitée',
      edit_title: 'Modifier la demande d\'imagerie',
      new_title: 'Nouvelle demande d\'imagerie'
    },
    alerts: {
      completed_title: 'Demande d\'imagerie traitée' ,
      completed_message: 'La demande d\'imagerie a été traitée.',
      saved_title: 'Demande d\'imagerie enregistrée',
      saved_message: 'La demande d\'imagerie a été enregistrée.'
    }
  },
  medication: {
    page_title: 'Demandes de médicament',
    section_title: 'Médicament',
    return_medication: 'Retourner un médicament',
    buttons: {
      dispense_medication: 'dispenser un médicament',
      new_button: '+ nouvelle demande',
      return_medication: 'retourner un médicament'
    },
    titles: {
      completed_medication: 'Médicament traitée',
      edit_medication_request: 'Modifier une demande de médicament',
      new_medication_request: 'Nouvelle demande de médicament'
    },
    messages: {
      create_new: 'Créer une nouvelle demande de médicament?',
      confirm_deletion: 'Êtes-vous sûr de vouloir supprimer cette demande de médicaments?'
    },
    labels: {
      refills: 'Renouvellements',
      quantity_requested: 'Quantité demandé',
      quantity_dispensed: 'Quantité dispensé',
      quantity_distributed: 'Quantité distribué',
      quantity_to_return: 'Quantité à retourner',
      return_location: 'Emplacement de retour',
      return_aisle: 'Rayon de retour',
      return_reason: 'Motif/notes du retour',
      adjustment_date: 'Date d\'ajustement',
      credit_to_account: 'Créditer le compte'
    },
    alerts: {
      returned_title: 'Médicament retourné',
      returned_message:  'Le médicament a été marqué comme retourné.',
      saved_title: 'Demande de médicament enregistrée',
      saved_message: 'Le dossier de médicament a été enregistré.',
      fulfilled_title: 'Demande de médicament traitée'
    }
  },
  appointments: {
    current_screen_title: 'Liste des rendez-vous',
    edit_title: 'Modifier le rendez-vous',
    new_title: 'Nouveau rendez-vous',
    section_title: 'Rendez-vous',
    this_week: 'Rendez-vous de la semaine',
    missed: 'Rendez-vous manqués',
    search_title: 'Rechercher les rendez-vous',
    today_title: 'Rendez-vous d\'aujourd\'hui',
    messages: {
      delete_appointment_message: 'Etes-vous sûr de vouloir supprimer ce rendez-vous?',
      end_time_later_than_start: 'Veuillez sélectionnez une heure de fin plus tard que l\'heure de début.'
    },
    buttons: {
      new_button: '+ nouveau rendez-vous'
    }
  },
  visits: {
    edit: {
      buttons: {
        new_appointment: 'Nouveau rendez-vous',
        add_diagnosis: 'Ajoute un diagnostic',
        new_procedure: 'Nouvelle procédure',
        new_lab: 'Nouveau labo',
        new_imaging: 'Nouvelle imagerie',
        new_medication: 'Nouveau médicament'
      },
      labels: {
        diagnosis: 'Diagnostic',
        procedure: 'Procédure',
        authored_by: 'Crée par',
        labs: 'Labos',
        imaging: 'Imagerie',
        visit_information: 'Détails de la visite'
      }
    }
  },
  labs: {
    section_title: 'Labos',
    requests_title: 'Demandes de labo',
    edit_title: 'Modifier la demande de labo',
    new_title: 'Nouvelle demande de labo',
    delete_title: 'Supprimer la demande',
    completed_title: 'Labos traités',
    labels: {
      lab_type: 'Type de labo',
      add_new_visit: '--Ajouter une nouvelle visite--'
    },
    messages: {
      no_items_found: 'Aucun labo retrouvé.',
      create_new_record: 'Créer un nouveau dossier?',
      confirm_deletion: 'Etes-vous sûr de vouloir supprimer cette demande de labo?',
      no_completed: 'Aucun article traité retrouvé.'
    },
    buttons: {
      new_button: '+ nouveau labo'
    },
    alerts: {
      request_completed_title: 'Demande de labo traitée',
      request_completed_message: 'La demande de labo a été traitée.',
      request_saved_title: 'Demande de labo enregistrée',
      request_saved_message: 'La demande de labo a été enregistrée.'
    }
  },
  common: {
    actions: 'Actions'
  },
  patients: {
    notes: {
      on_behalf_of_label: 'De la part de',
      on_behalf_of_copy: 'de la part de',
      please_select_a_visit: 'Veuillez sélectionner une visite',
      note_label: 'Note'
    }
  }
};
