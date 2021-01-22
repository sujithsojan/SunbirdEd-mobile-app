export const urlConstants = {
  SERVICES: {
    UNNATI: 'improvement-project/api/',
    KENDRA: 'kendra/api/',
    SAMIKSHA: 'assessment/api/',
    DHITI: 'dhiti/api/',
    SUNBIRD: 'sunbird/api/',
  },
  API_URLS: {
    PROGRAM_LISTING: 'v1/users/programs?',

    GET_PROJECTS: 'v1/userProjects/getProject?page=',
    SOLUTIONS_LISTING: 'v1/users/solutions/',
    GET_PROJECT: 'v2/userProjects/details',

    NOTIFICATIONs_LIST: 'v1/notifications/in-app/list',
    NOTIFICATION_COUNT: 'v1/notifications/in-app/unReadCount',
    PROJECTS_LIST: 'v1/userProjects/list',
    LIBRARY_CATEGORIES: 'v1/library/categories/list',
    TEMPLATES_LIST: 'v1/library/categories/projects/',
    TEMPLATE_DATA: 'v1/library/categories/projectDetails/',
    CREATE_PROJECT_FORM: 'v1/userProjects/metaForm',
    TEMPLATE_SORT: 'v1/library/categories/projects',
    REGISTERDEVICE: 'v1/notifications/push/registerDevice',
    PRIVATE_PROGRAMS: 'v1/users/privatePrograms',
    GET_PROFILE: 'v2/user-extension/getProfile',
    GET_STATES: 'v2/entities/listByEntityType/state',
    GET_SUBENTITIES: 'v1/entities/subEntityTypeList/',
    GET_ENTITY_LIST: 'v1/entities/subEntityList/',
    IMPORT_TEMPLATE: 'v1/userProjects/importFromLibrary/',
    GET_REPORT: 'v1/reports/entity/',
    GET_REPORT_TYPES: 'v1/reports/types',
    GET_ENTITY_TYPES: 'v1/user-extension/getEntityTypes',
    GET_ENTITIES_BY_TYPE: 'v1/user-extension/getEntities',
    GET_FULL_REPORT: 'v1/reports/detailView/',
    GET_PROGRAM_BY_ENTITY: 'v1/reports/getProgramsByEntity/',
    GET_TASK_META_FORM: 'v1/userProjects/tasksMetaForm',
    GET_LEARNING_RESOURCES: 'v1/learningResources/list',
    LEARNING_RESOURCES_LIST: 'v1/learning-resources/list?',
    GET_DYNAMIC_LINKS: 'v1/static-links/list',
    GET_LEARNING_RESOURCES_FILTERS: 'v1/learning-resources/filters',
    PROFILE_INFO: 'v1/users/getProfile',
    SYNC_PROJECT: 'v1/userProjects/sync/',
    CREATE_PROJECT_DOC: 'v1/userProjects/create',
    GET_IMAGE_UPLOAD_URLS: 'v1/userProjects/getFileUploadUrl',
    START_ASSESSMENT: 'v1/userProjects/solutionDetails/',
    PROJCET_TASK_STATUS: 'v1/userProjects/tasksStatus/',
    LIBRARY_SEARCH: 'v1/library/categories/projects?search=',
    STATE_LIST: 'v1/entities/listByEntityType/state',
    STATE_ROLES: 'v1/entities/subEntitiesRoles/',
    ENTITY_MAPPING_FORM: 'v1/users/entitiesMappingForm/',
    PROFILE_UPDATE: 'v1/user-extension/updateProfileRoles',
    MARK_AS_READ: 'v1/notifications/in-app/markAsRead/',
    GET_PREVIOUS_PROFILE: 'v1/users/search?search=',

    // survey api
    GET_PROG_SOL_FOR_OBSERVATION: 'v1/observations/getObservation',
    GET_OBSERVATION_ENTITIES: 'v1/observations/entities/',
    GET_OBSERVATION_SUBMISSIONS: 'v1/observationSubmissions/list/',
    GET_OBSERVATION_DETAILS: 'v1/observations/assessment/',
    GET_OBSERVATION_SUBMISSION_COUNT:'v1/observations/submissionsCount',
    EDIT_OBSERVATION_NAME: 'v1/observationSubmissions/title/',
    OBSERVATION_SUBMISSION_DELETE: 'v1/observationSubmissions/delete/',
    OBSERVATION_SUBMISSION_CREATE: 'v1/observationSubmissions/create/',
    ENTITY_LIST_BASED_ON_ENTITY_TYPE: 'v1/entities/listByEntityType/',
    SEARCH_ENTITY: 'v2/observations/searchEntities',
    MAP_ENTITY_TO_OBSERVATION: 'v1/observations/addEntityToObservation/',
    IS_SURVEY_SUBMISSION_ALLOWED: 'v1/surveySubmissions/isAllowed/',
    IS_OBSERVATION_SUBMISSION_ALLOWED: 'v1/observationSubmissions/isAllowed/',
    CHECK_IF_SUBMITTED: 'v1/submissions/isAllowed/',
    SURVEY_FEEDBACK_MAKE_SUBMISSION: 'v1/surveySubmissions/make/',
    OBSERVATION_MAKE_SUBMISSION: 'v1/observationSubmissions/make/',
    SUBMISSION: 'v1/submissions/make/',
    GET_SURVEY_IMAGE_UPLOAD_URLS: 'v1/files/getImageUploadUrl/',
    GET_SUBMISSION_PDF: 'v1/observationSubmissions/pdfFileUrl/',

    OBSERVATION_REPORTS: {
      INSTANCE_REPORT: '/observations/instance',
      ENTITY_REPORT: '/observations/entity',
      OBSERVATION_REPORT: '/observations/report',
      GET_REPORTS_PDF_URLS: '/observations/pdfReports?',
      OBSERVATION_LIST: '/observations/listObservationNames',
      ENTITY_OBSERVATION_REPORT: '/observations/entityObservationReport',
      SOLUTIOIN_LIST: '/observations/listObservationSolutions',
      ENTITY_SOLUTION_REPORT: '/observations/entitySolutionReport',
      ALL_EVIDENCE: 'v1/observations/listAllEvidences',
    },
    OBSERVATION_REPORTS_WITH_SCORE: {
      INSTANCE_REPORT: '/observations/instanceObservationScoreReport',
      ENTITY_REPORT: '/observations/entityScoreReport',
      OBSERVATION_REPORT: '/observations/scoreReport',
      GET_REPORTS_PDF_URLS: '/observations/observationScorePdfReport',
      OBSERVATION_LIST: '/observations/listObservationNames',
      SOLUTION_REPORT: '/observations/entitySolutionScoreReport',
    },
    CRITERIA_REPORTS_WITH_SCORE: {
      INSTANCE_REPORT: 'v1/observations/instanceScoreReportByCriteria',
      ENTITY_REPORT: 'v1/observations/entityScoreReportByCriteria',
      OBSERVATION_REPORT: 'v1/observations/observationScoreReportByCriteria',
      GET_REPORTS_PDF_URLS: 'v1/observations/scorePdfReportsByCriteria?',
    },

    CRITERIA_REPORTS: {
      INSTANCE_REPORT: 'v1/observations/instanceReportByCriteria',
      ENTITY_REPORT: 'v1/observations/entityReportByCriteria',
      OBSERVATION_REPORT: 'v1/observations/observationReportByCriteria',
      GET_REPORTS_PDF_URLS: 'v1/observations/pdfReportsByCriteria?',
    },
    SURVEY_FEEDBACK: {
      // SURVEY_LISTING: 'v1/surveySubmissions/list',
      SURVEY_LISTING: 'v1/surveys/getSurvey',
      GET_DETAILS_BY_LINK: 'v1/surveys/getDetailsByLink/' /* + link */,
      GET_DETAILS_BY_ID: 'v2/surveys/details/' /* + surveyId?solutionId=5f5b38ec45365677f64b2843*/,
      MAKE_SUBMISSION: 'v1/surveySubmissions/make/',
      SUBMISSION_REPORT: 'v1/surveys/submissionReport?submissionId=',
      SOLUTION_REPORT: 'v1/surveys/solutionReport?solutionId=',
      IS_SUBMISSION_ALLOWED: 'v1/surveySubmissions/isAllowed/',
      LIST_ALL_EVIDENCES: 'v1/surveys/listAllEvidences',
      GET_ALL_ANSWERS: 'v1/surveys/getAllResponsesOfQuestion/',
    },

    DEEPLINK: {
      VERIFY_OBSERVATION_LINK: 'v1/solutions/verifyLink/' /* + link */,
    },
  },
};
