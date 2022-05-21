export default interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: UserOrAssigneesEntityOrAssignee;
  labels?: (LabelsEntity | null)[] | null;
  state: string;
  locked: boolean;
  assignee?: UserOrAssigneesEntityOrAssignee1 | null;
  assignees?: (UserOrAssigneesEntityOrAssignee2 | null)[] | null;
  milestone?: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: null;
  author_association: string;
  active_lock_reason?: null;
  draft?: boolean | null;
  pull_request?: PullRequest | null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: null;
  state_reason?: null;
}
export interface UserOrAssigneesEntityOrAssignee {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface LabelsEntity {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description?: string | null;
}
export interface UserOrAssigneesEntityOrAssignee1 {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface UserOrAssigneesEntityOrAssignee2 {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at?: null;
}
export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}
