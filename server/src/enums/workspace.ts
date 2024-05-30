export enum ROLE {
  ADMIN = 'admin',
  USER = 'user',
}

export const ROLE_DESCRIPTION = {
  ADMIN: {
    name: '管理员',
    value: ROLE.ADMIN,
  },
  USER: {
    name: '用户',
    value: ROLE.USER,
  },
};

export enum PERMISSION {
  READ_WORKSPACE = 'READ_WORKSPACE',
  WRITE_WORKSPACE = 'WRITE_WORKSPACE',
  READ_MEMBER = 'READ_MEMBER',
  WRITE_MEMBER = 'WRITE_MEMBER',
  READ_SURVEY = 'READ_SURVEY',
  WRITE_SURVEY = 'WRITE_SURVEY',
}

export const ROLE_PERMISSION: Record<ROLE, PERMISSION[]> = {
  [ROLE.ADMIN]: [
    PERMISSION.READ_WORKSPACE,
    PERMISSION.WRITE_WORKSPACE,
    PERMISSION.READ_MEMBER,
    PERMISSION.WRITE_MEMBER,
    PERMISSION.READ_SURVEY,
    PERMISSION.WRITE_SURVEY,
  ],
  [ROLE.USER]: [
    PERMISSION.READ_WORKSPACE,
    PERMISSION.READ_MEMBER,
    PERMISSION.READ_SURVEY,
    PERMISSION.WRITE_SURVEY,
  ],
};