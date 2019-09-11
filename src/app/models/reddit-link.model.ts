export interface RedditLink {
  kind: "t3",
  data:{
    all_awardings?: [],
    allow_live_comments?: boolean,
    approved_at_utc?: unknown,
    approved_by?: unknown,
    archived?: boolean,
    author?: string,
    author_flair_background_color?: string,
    author_flair_css_class?: string,
    author_flair_richtext?: [],
    author_flair_template_id?: unknown,
    author_flair_text?: string,
    author_flair_text_color?: string,
    author_flair_type?: string,
    author_fullname?: string,
    author_patreon_flair?: boolean,
    banned_at_utc?: unknown,
    banned_by?: unknown,
    can_gild?: boolean,
    can_mod_post?: boolean,
    category?: unknown,
    clicked?: boolean,
    content_categories?: string[],
    contest_mode?: boolean,
    created?: number,
    created_utc?: number,
    discussion_type?: unknown,
    distinguished?: unknown,
    domain?: string,
    downs?: number,
    edited?: boolean,
    gilded?: number,
    gildings?: {},
    hidden?: boolean,
    hide_score?: boolean,
    id?: string,
    is_crosspostable?: boolean,
    is_meta?: boolean,
    is_original_content?: boolean,
    is_reddit_media_domain?: boolean,
    is_robot_indexable?: boolean,
    is_self?: boolean,
    is_video?: boolean,
    likes?: unknown,
    link_flair_background_color?: string,
    link_flair_css_class?: string,
    link_flair_richtext?: [],
    link_flair_text?: string,
    link_flair_text_color?: string,
    link_flair_type?: string,
    locked?: boolean,
    media?: unknown,
    media_embed?: {},
    media_only?: boolean,
    mod_note?: unknown,
    mod_reason_by?: unknown,
    mod_reason_title?: unknown,
    mod_reports?: [],
    name?: string,
    no_follow?: boolean,
    num_comments?: number,
    num_crossposts?: number,
    num_reports?: unknown,
    over_numbernumber?: boolean,
    parent_whitelist_status?: string,
    permalink?: string,
    pinned?: boolean,
    post_hint?: string,
    preview?: {images?: [{}], enabled?: boolean},
    pwls?: number,
    quarantine?: boolean,
    removal_reason?: unknown,
    report_reasons?: unknown,
    saved?: boolean,
    score?: number,
    secure_media?: unknown,
    secure_media_embed?: {},
    selftext?: string,
    selftext_html?: unknown,
    send_replies?: boolean,
    spoiler?: boolean,
    steward_reports?: [],
    stickied?: boolean,
    subreddit?: string,
    subreddit_id?: string,
    subreddit_name_prefixed?: string,
    subreddit_subscribers?: number,
    subreddit_type?: string,
    suggested_sort?: unknown,
    thumbnail?: string,
    thumbnail_height?: number,
    thumbnail_width?: number,
    title?: string,
    total_awards_received?: number,
    ups?: number,
    url?: string,
    user_reports?: [],
    view_count?: unknown,
    visited?: boolean,
    whitelist_status?: string,
    wls?: number,
  }
}