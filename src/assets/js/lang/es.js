/*
 * BEEP - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthsShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  Today: 'Hoy',
  Clear: 'Borrar',
  Close: 'Cerrar',
  firstDay: 1,
  format: 'dddd mmmm aaaa',

  /* main */
  Website: 'Sitio web',
  Feedback: 'Comentarios',
  Feedback_mail_header: 'BEEP app feedback',
  Feedback_mail_body:
    'Querida fundación BEEP,%0D%0A%0D%0A Aquí le envio mis comentarios sobre la aplicación BEEP.%0 D%0A%0D%0AI descubrió esto:%0D%0A%0D%0AJusto antes de que ocurriera, hice:%0D%0A%0D%0ALa pantalla se veía como (por favor incluya una captura de pantalla):%0D%0A%0D%0A%0D%0A%0A%0D%0A',
  Diagnostic_info: 'Información de diagnóstico (en caso de error):%0D%0A',
  back: 'Atrás',
  menu: 'Menu',
  lighting: 'iluminación',
  camera: 'cámara',
  weather: 'tiempo atmosférico',
  sensors: 'sensores',
  no_valid_authentication: ' No se han recibido datos de autenticación válidos',
  succesfully_saved: 'guardado con éxito',
  switch_language: 'Definir idioma',
  Delete: 'Eliminar',
  Search: 'Buscar...',

  /* user error messages */
  User: 'Usuario',
  User_data: 'Datos de usuario',
  user_data: 'datos de usuario',
  updated: 'actualizado',
  delete_complete_account:
    '¿Está seguro de que desea eliminar su cuenta completa, incluyendo todos los apiarios, colmenas e inspecciones? Es irrecuperable',
  username_is_required: 'Por favor, introduzca el nombre de usuario',
  username_already_exists: 'El nombre de usuario ya existe',
  password_is_required: 'Por favor, introduzca una contraseña',
  email_is_required:
    'Por favor, introduzca una dirección de correo electrónico',
  email_already_exists: 'La dirección de correo electrónico ya está en uso',
  policy_accepted_is_required:
    'Es necesario que Usted acepte los términos del servicio para registrarse',
  already_registered: 'Ya estoy registrado',
  invalid_user: 'Usuario desconocido o contraseña incorrecta',
  no_password_match: 'Las contraseñas no coinciden',
  invalid_token: 'Código no válido',
  no_valid_email: 'Dirección de correo electrónico no válida',
  empty_fields: 'Por favor, complete todos los campos',
  match_passwords: 'Las contraseñas no coinciden',
  succesfully_registered: 'Usted está registrado correctamente.',
  authentication_failed: 'No se pudo autenticar',
  no_valid_input_received:
    'No se pudieron guardar los datos, ninguna entrada válida fue recibida.',
  remove_all_settings: 'Eliminar todos los ajustes',
  remove_apiary: 'Eliminar apiario',
  remove_hive: 'Eliminar colmena',
  remove_inspection: 'Eliminar inspección',
  Error: 'Error',
  Warning: 'Advertencia',
  first_remove_hives:
    'Atención: Aun hay colmenas en este apiario. Usted puede guardar colmenas específicas (y sus inspecciones) trasladándolas primero a otro apiario. Si continúa con la eliminación, eliminará TODAS las colmenas e inspecciones presentes en esta ubicación.',
  Date: 'Fecha',
  ok: 'Ok',
  previous: 'Anterior',
  prev: 'anterior',
  next: 'Siguiente',
  add: 'Agregar',
  create_new: 'Crear nuevo',
  New: 'Nuevo',
  warning: 'Advertencia',
  apply: 'Aplicar',
  Cancel: 'Cancelar',
  automatic: 'Automático',
  manually: 'Manual',
  on: 'Encendido',
  off: 'Apagado',

  /* inicio de sesión */
  login_title: 'Iniciar sesión',
  login: 'Iniciar sesión',
  back_to_login: 'Volver a iniciar sesión',
  forgot_password: '¿Olvidó su contraseña?',
  username: 'Nombre de usuario',
  password: 'Contraseña',
  confirm_password: 'Confirmar contraseña',
  email: ' Correo electrónico ',
  token: 'Código',
  create_login_question: '¿Aún no tiene cuenta? Regístrese como nuevo usuario',
  create_login: 'Registrarse como nuevo usuario',
  create_login_summary: 'Crear una nueva cuenta de usuario',
  save: 'Guardar',
  save_and_return: 'Guardar y volver',
  logout: 'Cerrar sesión',
  logout_title: 'Cerrar sesión como',
  logout_now: '¿Realmente quieres cerrar sesión ahora?',
  member_since: 'BEEPing desde',

  /* Recuperación de contraseñas */
  password_recovery_title: '¿Olvidó su contraseña?',
  password_recovery_remembered: 'Oh, ahora recordé mi contraseña de nuevo!',
  password_recovery_user: 'Información del usuario',
  password_recovery_send_mail: 'Enviar código de verificación',
  password_recovery_code_not_received:
    '¿Código no recibido dentro de 5 minutos?',
  password_recovery_enter_code:
    '¿Ya tiene un código de verificación? Introdúzcalo aquí',
  password_recovery_reset_title: 'Introduzca una nueva contraseña',
  password_recovery_reset_password: 'Cambie contraseña',
  password_recovery_reminder_success:
    'Un correo electrónico se ha enviado. Haga clic en el enlace de su correo electrónico para restablecer la contraseña de esta cuenta.',
  password_recovery_reminder_summary:
    'Introduzca su dirección de correo electrónico. Usted recibirá un correo electrónico con un enlace para cambiar la contraseña en el siguiente paso.',
  password_recovery_reset_summary:
    'Utilice el código que Usted recibió para establecer una nueva contraseña para su cuenta',
  password_recovery_reset_success:
    ' Su contraseña ha sido exitosamente modificada, Usted ha iniciado sesión',
  new_password: 'Nueva contraseña',
  confirm_new_password: 'Confirmar nueva contraseña',
  go_to_dashboard: 'Ir al tablero',

  /* overview */
  overview_title: 'título del resumen',
  overview: 'Resumen',
  color: 'Color',
  state: 'Encendido/Apagado',
  connection_state: 'Estado de conexión',

  /* hives */
  locations_title: 'ubicación de la colmena',
  hives_title: 'título la colmena',
  Hive: 'Colmena | Colmenas',
  hive: 'colmena | colmenas',
  Location: 'Apiario | Apiarios',
  location: 'apiario | apiarios',
  Name: 'Nombre',
  name: 'nombre',
  Type: 'Tipo',
  type: 'tipo',
  Layer: 'Capa',
  layer: 'capa',
  brood: 'Cría',
  honey: 'Miel',
  inspect: 'Inspeccionar',
  inspection: 'inspección | inspecciones',
  Inspection: 'Inspección | Inspecciones',
  New_inspection: 'Nueva Inspección',
  Edit_inspection: 'Editar inspección',
  Actions: 'Acciones',
  Conditions: 'Condiciones (inspeccionado)',
  edit: 'Editar',
  Hive_layer_amount: 'Cantidad de capas en la colmena',
  Bee_race: 'Raza de abeja',
  Birth_date: 'Fecha de nacimiento',
  Color: 'Color',
  Queen_colored: 'Reina marcada',
  Queen_clipped: 'Reina recortada',
  Queen_fertilized: 'Reina fertilizada',
  Age: 'Edad',
  years_old: 'años de edad',

  /* Elementos de verificación de colmena */
  Date_of_inspection: 'Fecha de inspección',
  action: 'Acción',
  reminder: 'Recordatorio',
  remind_date: 'Fecha de recordatorio',
  overall: 'General',
  positive_impression: 'Impresión positiva',
  needs_attention: 'Necesita Atención',
  notes: 'Notas',
  notes_for_next_inspection:
    'Nota corta para la próxima inspección (visible en el resumen)',
  Not_implemented_yet: 'Este elemento aún no se ha implementado',
  save_input_first: '¿Desea guardar primero la entrada?',

  /* tablero */
  dashboard_title: 'Tablero',
  dashboard: 'Tablero',
  measurementsError:
    'No es posible cargar las mediciones, comprobar la conexión de red',
  last_measurement: 'Última medición',
  at: 'en',
  measurement_system: 'Sistema de medición ',
  no_data: 'No hay datos disponibles',
  no_chart_data: 'No hay datos de gráfico para el período seleccionado',

  /* Ajustes */

  /* settings */
  General: 'General',
  Place: 'Ubicación',
  Country: 'País',
  City: 'Ciudad',
  Address: 'Dirección',
  Lattitude: 'Latitud',
  Longitude: 'Longitud',
  Street: 'Calle',
  Number: 'Nro.',
  Postal_code: 'Código postal',
  Description: 'Descripción',
  Hive_settings: 'Ajustes de la colmena',
  Hive_amount: 'Cantidad de colmenas en esta ubicación',
  Hive_prefix: 'Prefijo del nombre de la colmena (antes del numéro)',
  Hive_number_offset: 'Compensación del número de colmena???',
  Hive_type: 'Tipo de colmena',
  Hive_layers: 'Capas de la colmena',
  Hive_frames: 'Marcos en la colmena',
  Hive_color: 'Color de la colmena',
  Queen: 'Reina',
  queen: 'reina',
  settings_title: 'Ajustes',
  settings_description: 'Configuración de los sensores',
  Settings: 'Configuración',
  settings: 'configuración',
  sensors_title: 'Configuración de los sensores',
  sensors_description: 'Descripción de sensores',
  //   sensors: 'Sensores',
  sensor: 'sensor',
  Select: 'Seleccionar',
  Not_selected: 'No seleccionado',
  Poor: 'Pobre',
  Fair: 'Justo',
  Average: 'Promedio',
  Good: 'Bueno',
  Excellent: 'Excelente',
  Low: 'Bajo',
  Medium: 'Medio',
  High: 'Alto',
  Extreme: 'Extremo',
  /* colores */
  select_color: 'Seleccionar un color',
  advanced: 'Avanzado',

  /* sensores */
  Select_sensor: 'Seleccionar un sensor',
  temperature: 'Temperatura',
  t: 'Temperatura',
  t_0: 'Temperatura 1',
  t_1: 'Temperatura 2',
  t_2: 'Temperatura 3',
  t_3: 'Temperatura 4',
  t_4: 'Temperatura 5',
  t_5: 'Temperatura 6',
  t_6: 'Temperatura 7',
  t_7: 'Temperatura 8',
  t_8: 'Temperatura 9',
  t_9: 'Temperatura 10',
  light: 'Luz Solar',
  l: 'Luz Solar',
  water: 'Agua',
  w: 'Agua',
  humidity: 'Humedad',
  h: 'Humedad',
  air_pressure: 'Presión de Aire',
  p: 'Presión de Aire',
  weight: 'Peso',
  w_v: 'El sensor de peso valora todos los sensores',
  w_fl: 'Valor del sensor de peso delantero izquierdo',
  w_fr: 'Valor del sensor de peso delantero derecho',
  w_bl: 'Valor del sensor de peso trasero izquierda',
  w_br: 'Valor del sensor de peso trasero derecha',
  weight_kg: 'Peso',
  weight_kg_corrected: 'Peso (corr)',
  weight_combined_kg: 'Peso combi',
  bat_volt: 'Batería',
  bv: 'Batería',
  sound_fanning_4days: 'Fan 4d abejas',
  s_fan_4: 'Fan 4d abejas',
  sound_fanning_6days: 'Fan 6d abejas',
  s_fan_6: 'Fan 6d abejas',
  sound_fanning_9days: 'Fan 9d abejas',
  s_fan_9: 'Fan 9d abejas',
  sound_flying_adult: 'Abejas voladoras',
  s_fly_a: 'Abejas voladoras',
  sound_total: 'Sonido total',
  s_tot: 'Sonido total',
  s_spl: 'Sonido total',
  bee_count_in: 'Cuenta de abejas en el interior',
  bc_i: 'Cuenta de abejas en el interior',
  bee_count_out: 'Cuenta de abejas en el exterior',
  bc_o: 'Cuenta de abejas en el exterior',
  t_i: 'Temp. dentro',
  rssi: 'Fuerza de la señal',
  snr: 'Ruido de la señal',
  lat: 'Latitud',
  lon: 'Longitud',
  Sound_measurements: 'Medidas de sonido?',
  Sensor_info: ' Información del sensor',
  s_bin098_146Hz: '098-146Hz',
  s_bin146_195Hz: '146-195Hz',
  s_bin195_244Hz: '195-244Hz',
  s_bin244_293Hz: '244-293Hz',
  s_bin293_342Hz: '293-342Hz',
  s_bin342_391Hz: '342-391Hz',
  s_bin391_439Hz: '391-439Hz',
  s_bin439_488Hz: '439-488Hz',
  s_bin488_537Hz: '488-537Hz',
  s_bin537_586Hz: '537-586Hz',
  s_bin_71_122: '071-122Hz',
  s_bin_122_173: '122-173Hz',
  s_bin_173_224: '173-224Hz',
  s_bin_224_276: '224-276Hz',
  s_bin_276_327: '276-327Hz',
  s_bin_327_378: '327-378Hz',
  s_bin_378_429: '378-429Hz',
  s_bin_429_480: '429-480Hz',
  s_bin_480_532: '480-532Hz',
  s_bin_532_583: '532-583Hz',
  s_bin_0_201: '0-201Hz',
  s_bin_201_402: '201-402Hz',
  s_bin_402_602: '402-602Hz',
  s_bin_602_803: '602-803Hz',
  s_bin_803_1004: '803-1004Hz',
  s_bin_1004_1205: '1004-1205Hz',
  s_bin_1205_1406: '1205-1406Hz',
  s_bin_1406_1607: '1406-1607Hz',
  s_bin_1607_1807: '1607-1807Hz',
  s_bin_1807_2008: '1807-2008Hz',
  icon: 'Icon',
  precipIntensity: 'Intesidad de precipitación',
  precipProbability: 'Probabilidad de lluvia',
  precipType: 'Tipo de lluvia',
  outsideTemperature: 'Temperatura exterior',
  apparentTemperature: 'Temperatura aparente',
  dewPoint: 'Temperatura de derretimiento???',
  //   humidity: 'Humedad',
  pressure: 'Presión de aire',
  windSpeed: 'Velocidad del viento',
  windGust: 'Ráfaga de viento',
  windBearing: 'Cojinete de viento',
  cloudCover: 'Cubierto de nubes',
  uvIndex: 'índice UV',
  visibility: 'Visibilidad',
  ozone: 'Ozono',

  /* Medidas */
  Hour: 'Horas',
  hour: 'hora | horas',
  day: 'Día',
  week: 'Semana',
  month: 'Mes',
  year: 'Año',

  /* Ajustes */
  could_not_load_settings: 'No se pudo cargar la configuración',
  offline: 'Sin conexión',
  remote: 'Remoto',
  connected: 'Directo',
  yes: 'Si',
  no: 'No',
  footer_text: 'Apicultura de código abierto',
  beep_foundation: 'la fundación BEEP',
  Checklist: 'Lista de verificación | Listas de verificación',
  checklist: 'lista de verificación | listas de verificación',
  Checklist_items: 'Artículos de la lista de verificación',
  edit_hive_checklist:
    'Marque/desmarque las casillas de la lista anterior para agregar/eliminar elementos de su lista de verificación de la colmena. También puede desplegar/doblar y arrastrar/soltar los elementos para reordenarlos a su propio estilo.',

  /* usuario */
  Data_export: 'Exportación de datos',
  Export_your_data:
    'Exportar todos los datos que se encuentran en su cuenta de BEEP y enviar un correo electrónico que contenga los datos como un archivo de Excel. El archivo de Excel tiene diferentes pestañas que contienen sus datos personales, colmena, ubicación y datos de inspección.',
  Terms_of_use: 'Términos del servicio',
  accept_policy:
    'Acepto las condiciones del servicio BEEP, las cuales son compatibles con la nueva ley europea de privacidad',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy: 'Usted aún no ha aceptado los términos del servicio.',

  /* Ajustes de calibración de peso */
  calibrate_weight: 'Calibrar peso',
  calibrate_explanation:
    'Establecer el peso de los sensores en 0 restando el valor de la medición actual.',
  set_as_zero_value: 'Establecer estos valores como valores 0',
  set_weight_factor: 'Definir factor de peso',
  own_weight_kg: '¿Cuál es su propio peso en kg?',
  start_calibration:
    'Ahora pise la pesa y presione el botón de abajo para definir el factor de peso. Distribuya su peso por igual.',
  currently_there_is: 'Hay un peso de',
  nothing: 'nada',
  on_the_scale: 'sobre la pesa',
  calibration_started:
    'La calibración comenzó... Espere a que la próxima medición surta efecto.',
  calibration_ended: '¡La calibración tuvo éxito!',

  /* Elementos generales */
  server_down:
    'La aplicación no está disponible debido a trabajos de mantenimiento, por favor inténtelo nuevamente más tarde',
  add_to_calendar: 'Agregar al calendario',
  sort_on: 'Ordenar de acuerdo a',
  Whats_new: 'Nuevo!',
  Manual: 'Manual',
  Site_title: 'BEEP ? Monitor de abejas',
  could_not_create_user:
    'El usuario no se puede crear en este momento. Disculpe, por favor inténtelo nuevamente más tarde.',
  email_verified: 'Su dirección de correo electrónico ha sido verificada.',
  email_not_verified:
    'Su dirección de correo electrónico aún no ha sido verificada.',
  email_new_verification:
    'Haga clic en este enlace para enviar un nuevo correo electrónico de verificación.',
  email_verification_sent:
    'Se ha enviado un mensaje con un enlace de verificación a su dirección de correo electrónico. Haga clic en el enlace del correo electrónico para activar su cuenta e iniciar sesión.',
  email_verification_resent:
    'Se ha enviado un nuevo mensaje con un enlace de verificación a su dirección de correo electrónico. Haga clic en el enlace del correo electrónico para activar su cuenta e iniciar sesión.',

  not_filled: 'no completado',
  cannot_deselect:
    'No se puede quitar este elemento, porque contiene un elemento necesario',
  Undelete: 'No borrar',
  No_groups: 'No hay grupos disponibles',
  not_available_yet: 'todavía no disponible. Por favor, cree el primero aquí.',
  Users: 'Users',
  member: 'miembros del grupo | miembros del grupo',
  Member: 'Miembros del Grupo | Miembros del Grupo',
  Invite: 'Invitar',
  Invited: 'Invitado',
  Invitation: 'Invitación | Invitaciones',
  Admin: 'Administrador',
  Creator: 'Propietario del Grupo',
  Collaborate: 'Colaboración',
  Group: 'Grupo de colaboración | Grupos de colaboración',
  group: 'grupo de colaboración | grupos de colaboración',
  group_short: 'grupo | grupos',
  to_share:
    'para compartir con este grupo. 1 clic= miembros del grupo que solo pueden ver, 2 clics= miembros del grupo que pueden editar',
  Invitation_accepted: 'Invitación aceptada',
  Accept: 'Aceptar',
  My_shared: 'Mi compartido',
  invitee_name: 'Nombre invitado',
  Remove_group:
    '¿Está seguro que desea eliminar completamente este grupo compartido para todos sus miembros',
  Detach_from_group: 'Quita a mí y a mis colmenas de este grupo',
  my_hive: 'Mi colmena',
  created: 'creado',
  group_detached: 'Salió con éxito del grupo',
  group_activated: 'Invitación de grupo aceptada',
  group_explanation_1:
    '1. Crear un nuevo grupo de cooperación con un título y una descripción opcional',
  group_explanation_2:
    '2. Invitar a otros usuarios de BEEP en su dirección de correo electrónico BEEP',
  group_explanation_3:
    '3. Compartir colmenas específicas para ser vistas por otros, de cooperar en',
  Filter_and_sort_on: 'Filtrar y ordenar:',

  /* TO BE TRANSLATED */
  /* New translations v2.2.0 */
  roofed: '¿El apiario tiene un techo?',
  info: 'Info',
  research: 'Investigación',
  start_date: 'Fecha de inicio',
  end_date: 'Fecha de término',
  purpose: 'Propósito de investigación',
  institution: 'Institución de investigación',
  type_of_data_used: 'Tipo de datos utilizados',
  link: 'Vínculo',
  Consent: 'Consentir',
  history: 'historia',
  Current_consent: 'Consentimiento actual',
  consent_yes: 'Yo consiento a compartir mis datos',
  consent_no: 'Yo no consiento a compartir mis datos',
  my_beep_data: 'Mis propios datos BEEP',
  Consent_can_only_be_set: 'El consentimiento solo se puede ajustar a',
  earlier: 'una anterior',
  later: 'una posterior',
  new_apiary_explanation: 'Crear un nuevo apiario en 4 pasos',
  start_here: 'Haga clik aquí para comenzar',
  optional: 'opcional',
  dimensions: 'dimensiones',
  details: 'detalles',
  configuration: 'configuración',
  adjustments: 'ajustes',
  changes_queen_color: 'La edición cambia el color',
  Brood_box_and_frame: 'Cámara de cría y marcos',
  Hive_order: 'Orden de las colmenas en el apiario',
  bb_width_cm: 'Ancho de la cámara de cría (cm)',
  bb_height_cm: 'Altura de la cámara de cría (cm)',
  bb_depth_cm: 'Profundidad de la cámara de cría (cm)',
  fr_width_cm: 'Amplitud de los marcos (cm)',
  fr_height_cm: 'Altura de los marcos (cm)',
  queen_line: 'línea',
  queen_tree: 'árbol',
  queen_description: 'notas',
  Hive_short: 'Colmena | Colmenas',
  Image: 'Imagen | Imágenes',
  Size: 'Tamaño',
  preview: 'vista previa',
  Inside: 'Medidas al interior',
  Offset: 'Compensación',
  Multiplier: 'Multiplicador',
  Input: 'Entrada',
  Output: 'Salida',
  Last: 'Último',
  Export_sensor_data:
    "Exportar todos los datos por dispostivo en la resolución más alta posible como un archivo .csv file que Usted pueda abrir en Excel, or SPSS. NB: Los datos de tiempo en la columna 'tiempo' se expresan en tiempo GMT, corregidos por los datos de tiempo estandar RFC 3339.",
  CSV_export_separator: 'CSV data column separator',
  Selected_date: 'Fecha seleccionada',
  Sensor_measurements: 'Mediciones de los sensores',
  too_much_data:
    'Demasiados datos para procesar, por favor seleccione menos mediciones de sensores, o reduzca el espacio de tiempo entre la fecha inicial y final.',
  beep_base_explanation:
    "Si Usted tiene una base BEEP (mostrada en la imagen de abajo), por favor utilice la app de la base BEEP (iOS and Android) para establecer comunicación con esta app. Si Usted aun no posee la base BEEP, por favor haga click en el item del menu 'sitio web BEEP' para actualizaciones en cómo obtener una base BEEP. Si Usted tiene su propio dispositivo de medición y le gustaría ver los datos en la app BEEP, por favor envienos un mensaje para solicitar unirse a nuestra comunidad estacionaria y Usted acceder a la descripcion API.",
  sample_code_hive: 'First select a hive, to generate a unique sample code',
  sample_code_generate: 'Generar código de la muestra',
  sample_code_delete: 'Eliminar código de la muestra',
  measurement_interval: 'intervalo de medición',
  from_weather_service: 'desde el servicio de tiempo atmosférico',

  /* New translations v3 */
  click_hives_to_filter: 'haga click en colmenas a filtrar',
  for: 'para',
  last_visit: 'última visita',
  apiary_details: 'detalles del apiario',
  group_details: 'detalles del grupo',
  diary: 'diario',
  data: 'datos',
  photo: 'foto | fotos',
  add_checklist: 'agregar lista de verificación',
  add_hive: 'agregar colmena',
  delete_apiary: 'eliminar apiario',
  edit_apiary: 'editar apiario',
  new_apiary: 'euevo apiario',
  delete_group: 'eliminar grupo',
  edit_group: 'editar grupo',
  new_group: 'nuevo grupo',
  verification_code: 'código de verificación',
  limit_exceeded: 'límite excedido',
  confirm_email_title: 'confirme su dirección de correo electrónico',
  confirm_email_summary:
    'Usted ha recibido un código de verificación en su correo electrónico. Ingréselo abajo para verificar su correo electrónico',
  confirm: 'confirme',
  Profile: 'Perfil',
  Checklist_template: ' Lista de chequeo de moldes',
  Help: 'Ayuda',
  Privacy: 'Privacidad',
  FAQ: 'PMF',
  Support: 'Soporte',
  no_inspections: 'sin inspeccionadas',
  no_results: 'sin resultados',
  Hive_brood_layer: 'Capa de Cría | Capas de Cría',
  Hive_honey_layer: 'Capa de Miel | Capas de Miel',
  Hive_queen_excluder_layer:
    'Excluidor de abeja reina | Excluidores de abejas reinas',
  Hive_feeding_box_layer: 'Capa de alza',
  overrides_layer_colors: 'anula los colores de las capas',
  drag_layers: 'Arrastrar capas para configurar colmenas',
  page: 'page | páginas',
  not_found: 'no encontrado',
  sorry: 'lo siento',
  delete_layer: 'eliminar capa',
  not_saved_error: 'no se guardaron los datos',
  something_wrong: 'algo salió mal',
  not_editable: 'no editable',
  unsaved_changes: 'cambios no guardados',
  save_changes:
    '¿Está seguro que desea abandonar esta página? Cualquier cambio no guardado se perderá',
  no_apiaries_yet: 'Usted no tiene ningún apiario aun',
  need_help: 'Necesita ayuda?',
  Apiary_color: 'Color del apiario',
  Set_notification_date: 'Establecer la fecha de notificación',
  remove_image: 'remover imagen',
  Total_colony_size: 'Tamaño total de la colonia',
  bee: 'abeja | abejas',
  with_bees: 'con abejas',
  change_checklist_confirm:
    'Èstá seguro que desea seleccionar una lista de verificación diferente? Los valores de los campos ya rellenados se mantendrán',
  view: 'ver',
  share: 'compartir',
  edit_details: 'editar detalles',
  remove_queen: 'remover abeja reina',
  remove_group_short: 'remover grupo pequeño',
  device: 'Dispositivo | Dispositivos',
  click_date_to_edit: 'Haga click en fecha para editar.',
  accept_policy_1: 'acepto los',
  accept_policy_2:
    ' BEEP, que son compatibles con la nueva ley europea de privacidad',
  terms_of_use: 'términos del servicio',
  the_field: 'el campo',
  is_required: 'is required',
  invalid_password:
    'La clave debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un caracter especial (\\]{}()?\\-"!@#%&/\\,><\':;|_~`)',
  sensor_definition: ' definición del sensor | definiciones del sensor',
  measurement: 'medición | mediciones',
  remove_device: 'remover dispositivo',
  last_message_received: 'último mensaje recibido',
  transmission_ratio: ' radio de transmisión',
  period: 'período',
  download: 'descargar',
  different_end_start: 'fin e inicio deben diferir',
  later_end_start: 'fecha de inicio debe ser anterior a la fecha de término',
  new_email_verification_sent:
    'Se ha enviado un mensaje con un enlace de verificación a su nueva dirección de correo electrónico. Haga clic en el enlace del correo electrónico para confirmar su nueva dirección de correo electrónico e iniciar sesión.',

  sensordef_info:
    "Una definición de sensor es destinada a convertir un valor de sensor desde un valor sensor 'crudo' entrante'en un valor de acuerdo a la cantidad física y unidad ((e.g. p_v = 1098273 => peso_kg = 62,400 kg) o calibrar un sensor (e.g. t_0 = 15.3 ° C => t_0 = 15.8 ° C). Lo anterior, puede ser realizado ajustando un 'compensar y un 'multiplicador. Los valores de ingreso y salida permanecen igual si se ha fijado la compensación en 0 y el multiplicador en 1. La app de la base BEEP (a partir del App Store) le proveerá definiciones correctas de los sensores en la instalación(configuración?) inicial de su base BEEP.",
  or: 'o',
  select_all_hives: 'Seleccionar todas las colmenas',
  select_all_editable_hives: 'Seleccionar todas las colmenas editables',
  Alert: 'Alerta | Alertas',
  alert: 'alerta | alertas',
  remove_alert: 'remove alerta',
  alerts_enabled: 'alerta habilitada',
  alerts_disabled: 'alerta deshabilitada',
  edit_checklist_confirm:
    'Está seguro que desea editar la lista de verificación? Datos de su inspección no guardados se perderán',
  edit_checklist_confirm_deselectedhives:
    'Está seguro que desea editar la lista de verificación? Datos de su inspección no guardados y su selección de colmenas se perderán',
  user_not_edited:
    'Datos del usuario no han sido editados. Posiblemente los datos de usuario son idénticos a los actuales datos de usuario, o uno o más campos no han sido completados correctamente. Por favor, revise sus datos y pruebe de nuevo.',
  user_not_deleted: 'Algo salió mal, usuario no ha sido eliminado.',
  research_consent: 'Consentir investigación',
  checklist_types: 'Personal, compartido, investigación',
  edit_hive_checklist_no_touch:
    'Chequear/no chequear las cajas en la lista de abajo para agregar/remover ítems de su lista de verificación de colmenas. Además, Usted puede archivar/des archivar y arrastrar/dejar caer los ítems para re-ordenarlos a su propia manera (N. B. esto no es posible de realizar en un dispositivo pantalla táctil',
  edit_hive_checklist_touch:
    'Chequear/no chequear las cajas en la lista de abajo para agregar/remover ítems de su lista de verificación de colmenas. Es posible cambiar el orden de los ítems solo en un computador de escritorio.',
  input_not_possible_for_bulkinspection:
    'Este ítem no está disponible cuando numerosas colmenas son seleccionadas para una inspección, ya que este solo puede ser completado para una colmena en particular. Es posible completar este ítem para una única colmena a último momento, editando la inspección para aquella colmena.',
  save_bulkinspection_confirm:
    '¿Está seguro que desea guardar esta inspección para numerosas colmenas al mismo tiempo?',
  deleted_but_not_saved_devices_warning:
    "N. B.: dispositivos serán solo removidos luego de hacer en click en el botón 'Guardar y eliminar' en lado superior derecho.",
  no_alerts: 'sin alerta',
  alertrule: 'regla de alerta | reglas de alerta',
  alertrule_pagetitle: 'Ajustes de alerta',
  Measurement: 'Medición | Mediciones',
  Calculation: 'Cálculo',
  calculation: 'cálculo',
  Alert_on_occurences: 'Cuando le gustaría recibir esta alerta?',
  Alert_on_occurences_hint:
    'Directamente, o solo después que este haya ocurrido un x número de veces?',
  Direct: 'Directamente',
  After: 'Después',
  times: ' veces',
  Comparator: 'Comparador',
  comparator: 'comparador',
  Comparison: 'Comparación',
  comparison: 'comparación',
  Threshold_value: 'Valor umbral',
  Minimum: 'Mínimo',
  Maximum: 'Máximo',
  Derivative: 'Derivada (aumento o disminución)',
  Count: 'Recuento',
  Value: 'Valor',
  Difference: 'Diferencia',
  Absolute_value: 'Valor absoluto',
  Absolute_value_of_dif: 'Valor absoluto de la diferencia',
  Exclude_months:
    '<strong>Desactivar</strong> esta alerta durante los siguientes meses:',
  Exclude_hours:
    '<strong>Desactivar</strong> esta alerta durante las siguientes horas:',
  Exclude_hives:
    '<strong>Desactivar</strong> esta alerta para las siguientes colmenas:',
  Exclude_hives_details:
    'N.B. Por defecto, esta alerta será realizada para todas las colmenas con un dispositivo de medición.',
  months: 'meses',
  hours: 'horas',
  delete_alertrule: 'eliminar regla de alerta',
  Active: 'Activo',
  Alert_via_email: 'Alerta via correo electrónico',
  Webhook_url: 'Webhook url',
  this_field: 'Este campo',
  alertrule_default:
    'Regla de alerta por defecto | Reglas de alerta por defecto',
  copy: 'copiar',
  Home: 'Hogar',
  Select_default_alertrule: 'Copiar regla de alerta por defecto',
  /* below, please keep all terms between [] in english: */
  alertrule_main_sentence:
    'Me gustaría recibir una alerta si la [calculation] [comparison] de las [measurement_quantity] [comparator] [threshold_value][measurement_unit]. Este cálculo será realizado cada [calculation_minutes]. ',
  alertrule_occurences_direct_sentence:
    'Y me gustaría recibir la alerta directamente. ',
  alertrule_occurences_indirect_sentence:
    'pero me gustaría recibir la alerta solo si ocurre [alert_on_occurences] veces. ',
  alertrule_exclude_months_sentence:
    'Esta alerta será desactivada durante los siguientes meses: [exclude_months]. ',
  alertrule_exclude_hours_sentence:
    'Esta alerta será desactivada durante las siguientes horas: [exclude_hours]. ',
  alertrule_exclude_hives_sentence:
    'Esta alerta será desactivada para las siguientes colmenas: [exclude_hive_ids].',
  min: 'mínimo',
  max: 'máximo',
  ave: 'promedio',
  der: 'derivada',
  cnt: 'recuento',
  equal_to: 'igual a',
  less_than: 'menor que',
  greater_than: 'mayor que',
  less_than_or_equal: 'menor que o igual a',
  greater_than_or_equal: 'mayor que o igual a',
  alertrule_not_active:
    "Esta alerta ha sido desactivada. Usted puede activarla haciendo click en la caja 'Activa' y guardando esta regla de alerta",
  export_email_sent:
    'un correo electrónico con el archivo Excel ha sido enviado',
  export_file_saved:
    'el archivo Excel ha sido guardado en su carpeta Descargas',
  Updated_at: 'Actualizado en',
  Not_yet_saved: 'No guardado aun',
  add_own_device: 'Agregar su propio dispositivo',
  devices_info_text:
    'Atención: Eres propietario de una base BEEP? Utiliza la app de la base BEEP para agregar tu dispositivo. Este aparecerá luego automáticamente en la lista de abajo',
  devices_url_text:
    'Aquí puedes encontrar mas información sobre la app de la base BEEEP',
  alert_explanation_1:
    'Si posees una base BEEP u otro dispositivo puedes definir alertas, de esa forma recibirás una alerta cuando los datos de medición cumplan ciertos requerimientos. Por ejemplo, una caída repentina en la pérdida de peso debida a enjambrazón. La alerta será mostrada en esta app, tu también puedes escoger recibirlas vía correo electrónico',
  alert_explanation_2:
    'Para empezar hay algunas reglas de alertas que puedes utilizar (y adaptar según tus propias necesidades). Además, puedes crear tus propias reglas de alertas',
  alertrules_url_text:
    'Ir a Ajustes de alerta para crear tu primera regla de alerta',
  Apiary_management: 'Manejo de apiario',
  Move: 'Mover',
  Current_apiary: 'Apiario actual',
  sensor_key: 'Identificador de dispositivo único',
  disabled_settings: 'La edición manual de estos ajustes ha sido inhabilitada.',
  Address_placeholder: 'Número, Nombre de calle, Ciudad',
  first_create_apiary: 'primero, crear un apiario',
  Unknown: 'Desconocido',
  unknown: 'desconocido',
  research_warning:
    'Atención: Si Usted no recibió ninguna invitación a participar, no era necesario entregar consentimiento para compartir sus datos, ya que en ese caso sus datos no serán utilizados',
  research_explanation_p1:
    'La plataforma BEEP es utilizada en los proyectos de investigación listados abajo. Luego que Usted sea invitado a participar en un proyecto de investigación, Usted necesita entregar consentimiento a los investigadores para acceder a los datos de sus abejas',
  research_explanation_p2:
    'Usted puede retirar su consentimiento en cualquier momento. A partir de ese momento, ningún dato nuevo será compartido. Los datos que Usted comparta en el periodo para el cual Usted entregó consentimiento permanecerán disponibles para la investigación. En caso de preguntas, por favor dirigirse a la persona contacto de su proyecto de investigación',
  research_info:
    'Antes que Usted consienta, por favor revise la descripción de investigación provista en el vínculo de abajo, si es necesario puede solicitar detalles adicionales',
  save_and_delete: 'Guardar y eliminar',
  drag_layers_info_text:
    'Arrastre capas desde el lado izquierdo a la posición deseada dentro de la colmena en el lado derecho. Elimine una capa de la colmena haciendo clic en ella y luego en el icono de la papelera roja. Dentro de la colmena, las capas también se pueden arrastrar para editar la posición, el color de la capa se puede editar haciendo clic en la capa.',
  New_hive: 'Nueva colmena',
  New_alertrule: 'Nueva regla de alerta',
  Add_alertrule: 'Agregar regla de alerta',
  Add_apiary: 'Agregar apiario',
  Add_sensor_definition: 'Agregar definición de sensor',
  Add_member: 'Agregar miembro',
  alert_rule_deleted: 'La regla de alerta ha sido eliminada',

  /* TO BE TRANSLATED FOR v3 */
  new_or_edited_but_not_saved_sensor_defs_warning:
    'N.B.: sensor definitions will only be saved or added after clicking the green check icon at the end of the sensor definition row in the table.',
  delete_sensordef: 'Delete sensor definition',
  delete_all_alerts: 'Delete all alerts',
  delete_all_alerts_warning:
    'Are you sure you want to delete all alerts? This cannot be undone.',
  delete_all_alerts_warning_filter_active:
    'Are you sure you want to delete all alerts? Alerts that do not match your search term will be deleted as well. This cannot be undone.',
  already_verified: 'I have verified my email address and would like to login',
  password_recovery_resend_mail: 'Send new verification code',
  alert_rule_created: 'New alert rule has been created',
  select_all: 'Select all',
  During: 'During', // context: 'During 2 days', or 'During 1 hour', to notify the period during which the same alert has been triggered (each evaluation) in a row
  Calculation_minutes:
    'How often would you like the calculation to be performed?',
  Every: 'Every', // context: how often would you like the alert rule calculation to be performed? -> every 15 min, ..., every 24 hours etc.
  Calculation_minutes_short: 'How often is it calculated?', // for alert rule overview table header
  Alert_on_occurences_short: 'When do you receive the alert?', // for alert rule overview table header
  Disable_alert_for_this_hive: 'Disable alert for this hive',
  Alert_disabled_for_this_hive: 'Alert is disabled for this hive',
  disabled_for_hive: 'has been disabled for hive', // [alert] has been disabled for the following hive
  Alert_disabled: 'Alert disabled',

  // For soon to be launched new log data import page
  Log_data_import: 'Import log data',
  Log_files: 'Log files',
  Upload_date: 'Upload date',
  Messages: 'Messages',
  Log_time: 'Time logged',
  File_size: 'File size',
  check_log_data: 'Check log data',
  delete_log_file: 'Delete log file',
  commit_log_data_short: 'Import log data',
  commit_log_data: 'Import data from this log file to the BEEP app: ',
  import_log_data_explanation:
    "In the BEEP base app you can download log data from the internal memory of the BEEP base. Every time you download log data, the internal memory gets cleared and the data gets uploaded to the BEEP app. Below is the list of your downloaded log data. You can replace the data in the database by the data inside the downloaded log files by clicking the button 'Check log data'. This will first check how much data will be replaced inside the database, and if the time of the data in the log file is correct. You will get a confirmation box with the resulting info, and the possibility to apply or deny the replacement.",
  import_log_data_url_text:
    'Here you can find the support article on downloading log data with the BEEP base app.',
  import_log_data_support_url:
    'https://beepsupport.freshdesk.com/es/support/solutions/articles/60000697129-descargar-datos-de-base-de-beep-a-trav%C3%A9s-de-bluetooth',
}

export default translations
