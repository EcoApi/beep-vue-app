/*
 * Beep - Translations
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
  weekdaysFull: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
  weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  Today: 'Hoy',
  Clear: 'Borrar',
  Close: 'Cerrar',
  firstDay: 1,
  format: 'dddd d mmmm aaaa',

  /* main */
  Website: 'Sitio web',
  Feedback: 'Comentarios',
  Feedback_mail_header: 'Beep app feedback',
  Feedback_mail_body:
    'Querida fundación Beep,%0D%0A%0D%0A Aquí le envio mis comentarios sobre la aplicación Beep.%0 D%0A%0D%0AI descubrió esto:%0D%0A%0D%0AJusto antes de que ocurriera, hice:%0D%0A%0D%0ALa pantalla se veía como (por favor incluya una captura de pantalla):%0D%0A%0D%0A%0D%0A%0A%0D%0A',
  Diagnostic_info: 'Información de diagnóstico (en caso de error):%0D%0A',
  back: 'Atrás',
  menu: 'Menú',
  lighting: 'Iluminación',
  camera: 'Cámara',
  weather: 'Tiempo',
  sensors: 'Sensores',
  sensors_na:
    'Los sensores BEEP para monitorear remotamente su colmena pronto estarán disponibles...',

  no_valid_authentication: ' No se han recibido datos de autenticación válidos',
  succesfully_saved: 'Guardado con éxito',

  switch_language: 'Cambiar idioma',
  Delete: 'Eliminar',
  Search: 'Buscar...',

  /* user error messages */
  User: 'Usuario',
  User_data: 'Datos de usuario',
  user_data: 'datos de usuario',
  updated: 'actualizado',
  delete_complete_account:
    '¿Está seguro de que desea eliminar su cuenta completa, inludiendo todos los apiarios, colmenas e inspecciones? Es irrecuperable',
  username_is_required: 'Por favor introduzca el nombre de usuario',
  username_already_exists: 'El nombre de usuario ya existe',
  password_is_required: 'Por favor introduzca una contraseña',
  email_is_required: 'Por favor introduzca una dirección de correo electrónico',
  email_already_exists: 'La dirección de correo electrónico ya está en uso',
  policy_accepted_is_required:
    'Es necesario que Usted acepte los términos del servicio para registrarse',

  already_registered: 'Ya estoy registrado',
  invalid_user: 'Usuario desconocido, o contraseña incorrecta',
  invalid_password: 'Contraseña demasiado corta (mín. 8 caracteres)',
  no_password_match: 'Las contraseñas no coinciden',
  invalid_token: 'Código no válido',

  no_valid_email: 'Dirección de correo electrónico no válida',

  empty_fields: 'Por favor rellene todos los campos',
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
    'Atención: aun hay colmenas en este apiario. Usted puede guardar colmenas específicas (y sus inspecciones) trasladándolas primero a otro apiario. Si continúa con la eliminación, eliminará TODAS las colmenas e inspecciones presentes en esta ubicación.',

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

  create_login_question: '¿Aún no tienes cuenta? Regístrese como nuevo usuario',
  create_login: 'Registrarse como nuevo usuario',
  create_login_summary: 'Crear una nueva cuenta de usuario',
  save: 'Guardar',
  save_and_return: 'Guardar y volver',

  logout: 'Cerrar sesión',
  logout_title: 'Cerrar sesión como ',
  logout_now: '¿Realmente quieres cerrar sesión ahora?',
  member_since: 'Beeping desde',

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
    ' Su contraseña ha sido modificada exitosamente, Usted ha iniciado sesión',

  new_password: 'Nueva contraseña',
  confirm_new_password: 'Confirmar nueva contraseña',

  go_to_dashboard: 'Ir a mi tablero',

  /* overview */
  overview_title: 'título del resumen',
  overview: 'Resumen',
  color: 'Color',
  state: 'Encendido/Apagado',
  connection_state: 'Estado de conexión',

  /* hives */
  locations_title: 'Señal Sonora',
  hives_title: 'Señal Sonora',
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
  New_inspection: 'Nuevas Inspección',
  Edit_inspection: 'Editar inspección',
  Actions: 'Acciones',
  Conditions: 'Condiciones (inspeccionado)',
  edit: 'Editar',
  Hive_layer_amount: 'Conteo de Capas',
  Bee_race: 'Raza de abeja',
  Birth_date: 'Fecha de nacimiento',
  Color: 'Color',
  Queen_colored: 'Reina Marcada',
  Queen_clipped: 'Reina Recortada',
  Queen_fertilized: 'Reina Fertilizada',
  Age: 'Edad',
  years_old: 'años de edad',

  /* Elementos de verificación de colmena */
  Date_of_inspection: 'Fecha de inspección',
  action: 'Acción',
  reminder: 'Recordar',
  remind_date: 'Fecha de notificación',

  overall: 'General',
  positive_impression: 'Impresión total',
  needs_attention: 'Necesita Atención',
  notes: 'Notas',
  notes_for_next_inspection:
    'Nota corta para la próxima inspección (visible en el resumen)',
  Not_implemented_yet: 'Este elemento aún no se ha implementado',
  save_input_first: '¿Desea guardar primero la entrada?',

  /* tablero */
  dashboard_title: 'Tablero',
  dashboard: 'Tablero',
  measurements: 'Medidas',
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
  Number: 'No.',
  Postal_code: 'Codigo postal',
  Description: 'Descripcion',
  Hive_settings: 'Configuración de la colmena',
  Hive_amount: 'Cantidad de colmenas en esta ubicación',
  Hive_prefix: 'Prefijo del nombre de la colmena (antes del numéro)',
  Hive_number_offset: '??????? ',
  Hive_type: 'Tipo de colmena',
  Hive_layers: 'Capas de la colmena',
  Hive_frames: 'Marcos por capa',
  Hive_color: 'Color de la colmena',
  Queen: 'Reina',
  queen: 'reina',

  settings_title: 'Configuración',
  settings_description: 'Configuración de los sensores',
  Settings: 'Configuración',
  settings: 'configuración',

  sensors_title: 'Configuración de los sensores',
  sensors_description: 'Descripción de sensores',
  //   sensors: 'Sensores',
  sensor: 'Device',

  Select: 'Seleccionar',
  Not_selected: 'No seleccionado',
  Poor: 'Pobre',
  Fair: 'Justo',
  Average: 'Promedio',
  Good: 'Bueno',
  Excellent: 'Excelente',
  Low: 'Bajo',
  Medium: 'Mediano',
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
  icon: 'Icon',
  precipIntensity: 'Rainfall',
  precipProbability: 'Rain probability',
  precipType: 'Rain type',
  outsideTemperature: 'Outside temperature',
  apparentTemperature: 'Apparent temperature',
  dewPoint: 'Dew point',
  //   humidity: 'Humidity',
  pressure: 'Air pressure',
  windSpeed: 'Wind speed',
  windGust: 'Wind gust',
  windBearing: 'Wind bearing',
  cloudCover: 'Cloud cover',
  uvIndex: 'UV index',
  visibility: 'Visibility',
  ozone: 'Ozone',

  /* Medidas */
  hour: 'Horas',
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
    'Marque/desmarque las casillas de la lista anterior para agregar/eliminar elementos de su lista de comprobación de la colmena. También puede desplegar/doblar y arrastrar/soltar los elementos para reordenarlos a su propio estilo.',

  /* usuario */
  Data_export: 'Exportación de datos',
  Export_your_data:
    'Exportar todos los datos que se encuentran en su cuenta de Beep y enviar un correo electrónico que contenga los datos como un archivo de Excel. El archivo de Excel tiene diferentes pestañas que contienen sus datos personales, colmena, ubicación y datos de inspección.',

  Terms_of_use: 'Términos del servicio',
  accept_policy:
    'Acepto las condiciones del servicio BEEP, que son compatibles con la nueva ley europea de privacidad',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy:
    'Usted aún no ha cumplido con los últimos términos del servicio.',

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
    'La calibración comenzó... Espere a que la próxima medición surta  efecto.',
  calibration_ended: '¡La calibración tuvo éxito!',

  /* Elementos generales */
  server_down:
    'La aplicación no está disponible debido a trabajos de mantenimiento, por favor inténtelo de nuevo más tarde',
  add_to_calendar: 'Agregar al calendario',
  sort_on: 'Ordenar en',
  Whats_new: 'Nuevo!',
  Manual: 'Manual',

  Site_title: 'BEEP ? Monitor de abejas',

  could_not_create_user:
    'El usuario no se puede crear en este momento. Lo siento por la molestia, por favor inténtelo de nuevo más tarde.',
  email_verified: 'Su dirección de correo electrónico ha sido verificada.',
  email_not_verified:
    'Su dirección de correo electrónico aún no ha sido verificada.',
  email_new_verification:
    'Haga clic en este enlace para enviar un nuevo correo electrónico de verificación.',
  email_verification_sent:
    'Se ha enviado un mensaje con un enlace de verificación a su dirección de correo electrónico. Haga clic en el enlace del correo electrónico para activar su cuenta e iniciar sesión.',

  not_filled: 'es necesario, pero no rellenado',
  cannot_deselect:
    'No se puede quitar este elemento, porque contiene un elemento necesario',
  sensor_key: 'Tecla del sensor',
  Undelete: 'No borrar',
  No_groups: 'No hay grupos disponibles',
  not_available_yet: 'todavía no disponible. Por favor, cree el primero aquí.',
  Users: 'Users',
  member: 'miembros del grupo | miembros del grupo',
  Member: 'Miembros del Grupo | Miembros del Grupo',
  Invite: 'Invitar',
  Invited: 'Invitado',
  invitations: 'invitaciones',
  Admin: 'Administrador',
  Creator: 'Propietario del Grupo',
  Collaborate: 'Colaboración',
  Group: 'Grupo de colaboración | Grupos de colaboración',
  group: 'grupo de colaboración | grupos de colaboración',
  to_share:
    'para compartir con este grupo. 1 click= miembros del grupo que solo pueden ver, 2 clicks= miembros del grupo que pueden editar',
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
    '1. Crear un nuevo grupo de cooperación con un título claro y una descripción opcional',
  group_explanation_2:
    '2. Invitar a otros usuarios de Beep en su dirección de correo electrónico Beep',
  group_explanation_3:
    '3. Compartir colmenas específicas para ser vistas por otros, de cooperar en',
  Filter_and_sort_on: 'Filtrar y ordenar:',

  /* New translations v2.2.0 */
  roofed: 'Does the apiary have a roof?',
  info: 'Info',

  research: 'Research',
  research_explanation:
    'This screen contains the available researches for which you can opt-in to share your data with. When you consent to share your BEEP account data, you contribute to research to support honeybee health. Before you consent, please review the research description provided through the link below and request for additional details if needed. You can withdraw your consent at any time, no new data will be shared from that moment. The data that your shared in the period that you did consent to will remain available for research. In case of questions, please direct these to the contact person provided.',
  research_info:
    'By sharing your data with researchers, you help them to being able to analyse more data and come to better conclusions for their research.',
  start_date: 'Start date',
  end_date: 'End date',
  purpose: 'Research purpose',
  institution: 'Research institution',
  type_of_data_used: 'Data usage',
  link: 'Link',
  Consent: 'Consent',
  history: 'history',
  Current_consent: 'Current consent',
  consent_yes: 'I consent to share my data',
  consent_no: 'I do NOT consent to share my data',
  my_beep_data: 'My own BEEP data',
  Consent_can_only_be_set: 'Consent can only be adjusted to',
  earlier: 'an earlier',
  later: 'a later',

  new_apiary_explanation: 'Create a new apiary in 4 steps',
  start_here: 'Click here to start',
  optional: 'optional',
  dimensions: 'dimensions',
  details: 'details',
  configuration: 'configuration',
  adjustments: 'adjustments',
  changes_queen_color: 'editing changes the color',

  Brood_box_and_frame: 'Brood box and frame',
  Hive_order: 'Hive order at apiary',
  bb_width_cm: 'Brood box width (cm)',
  bb_height_cm: 'Brood box height (cm)',
  bb_depth_cm: 'Brood box depth (cm)',
  fr_width_cm: 'Frame width (cm)',
  fr_height_cm: 'Frame height (cm)',
  queen_line: 'line',
  queen_tree: 'tree',
  queen_description: 'notes',
  Hive_short: 'Hive | Hives',

  Image: 'Image | Images',
  Size: 'Size',
  preview: 'preview',

  Sensor_definitions: 'Sensor definitions',
  Inside: 'Measures inside',
  Offset: 'Offset',
  Multiplier: 'Multiplier',
  Input: 'Input',
  Output: 'Output',
  Last: 'Last',

  Export_sensor_data:
    "Export all data per device in the highest possible resolution as a .csv file that you can open in Excel, or SPSS. NB: The date time data in the 'time' column is in GMT time, formatted by the RFC 3339 date-time standard.",
  CSV_export_separator: 'CSV data column separator',
  Selected_date: 'Selected time span',
  Sensor_measurements: 'Sensor measurements',
  too_much_data:
    'Too much data to process, please select fewer Sensor measurements, or reduce the timespan between start and end date.',

  beep_base_explanation:
    "If you have a BEEP base (shown in the picture above), please use the native app (iOS and Android) to set-up the communication with this app. If you don't have a BEEP base yet, please click on the menu item 'BEEP website' for updates on how to get a BEEP base. I you have your own measurement device and would like to see the data in the BEEP app, please send us a message to ask for joining our Slack community and you can get access to the API description.",

  /* New translations v3 */
  click_hives_to_filter: 'Haga clic en colmenas para filtrar',
  for: 'para',
  last_visit: 'Última visita',
  apiary_details: 'Detalles del apiario',
  group_details: 'Detalles del grupo',
  diary: 'diario',
  data: 'datos',
  photo: 'foto | fotos',
  add_checklist: 'Agregar lista de verificación',
  add_hive: 'Añadir colmena',
  delete_apiary: 'Eliminar apiario',
  edit_apiary: 'Editar apiario',
  new_apiary: 'Nuevo apiario',
  delete_group: 'Eliminar grupo',
  edit_group: 'Editar grupo',
  new_group: 'Nuevo grupo',
  verification_code: 'código de verificación',

  /* TO BE TRANSLATED */
  limit_exceeded: 'Limit has been reached, try again later',
  confirm_email_title: 'Confirm your email',
  confirm_email_summary:
    "You've received a verification code in your email. Enter it below to verify your email adress",
  confirm: 'Confirm',
  Profile: 'Profile',
  Checklist_template: 'Checklist template | Checklist templates',
  Help: 'Help',
  Privacy: 'Privacy',
  FAQ: 'FAQ',
  Support: 'Support',
  no_inspections: 'No inspections yet',
  no_results: 'No results',
  Hive_brood_layer: 'Capa de Cría | Capas de Cría',
  Hive_honey_layer: 'Capa de Miel | Capas de Miel',
  Hive_queen_excluder_layer: 'Queen excluder | Queen excluders',
  Hive_feeding_box_layer: 'Feeding box | Feeding boxes',
  overrides_layer_colors: 'overrides layer colors',
  drag_layers: 'Drag layers to configure hive',
  page: 'page | pages',
  not_found: 'not found',
  sorry: 'Sorry',
  delete_layer: 'Delete layer',
  not_saved_error: 'No se pudieron guardar los datos',
  something_wrong: 'Something went wrong',
  not_editable: 'not editable',
  unsaved_changes: 'Unsaved changes',
  save_changes:
    'Are you sure you want to leave this page? Any unsaved changes will be lost.',
  no_apiaries_yet: "You don't have any apiaries yet",
  need_help: 'Need help?',
  Apiary_color: 'Apiary color',
  Set_notification_date: 'Set notification date',
  remove_image: 'Remove image',
  Total_colony_size: 'Total colony size',
  bee: 'bee | bees',
  with_bees: 'with bees',
}

export default translations
