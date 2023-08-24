import { Artifact } from './artifact';
import { AffectedFile } from './affected_file';
import { Changelog } from './changelog';

export interface Release {
    id: number;
    org: string;
    repo: string;
    release_channel: string;
    diffs_url: string;
    released_at: string;
}

export interface ReleaseDTO {
    release: Release;
    changelogs: Changelog[];
    artifacts: Artifact[];
    affected_files: AffectedFile[];
}

export interface ReleaseDTOJson {
    message: string;
    data: ReleaseDTO[];
}
