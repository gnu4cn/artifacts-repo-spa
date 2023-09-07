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

export interface ReleasesDTO {
    message: string;
    data: ReleaseDTO[];
}

export interface ReleaseChannelDTO {
    channel: string;
    count: number;
}
