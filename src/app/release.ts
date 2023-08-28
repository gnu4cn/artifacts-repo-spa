import { Repository } from './repository';
import { Artifact } from './artifact';
import { AffectedFile } from './affected_file';
import { Changelog } from './changelog';

export interface Release {
    id: number;
    release_channel: string;
    diffs_url: string;
    released_at: string;
    repository_id: number;
}

export interface ReleaseDTO {
    repository: Repository;
    release: Release;
    changelogs: Changelog[];
    artifacts: Artifact[];
    affected_files: AffectedFile[];
}

export interface ReleaseResp {
    message: string;
    data: ReleaseDTO[];
}
