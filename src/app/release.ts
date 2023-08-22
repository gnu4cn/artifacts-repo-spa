import { Artifact } from './artifact';
import { AffectedFile } from './affected_file';
import { Changelog } from './changelog';

interface Release {
    id: number;
    repo: string;
    diffs_url: string;
    released_at: string;
}

export interface ReleaseDTO {
    release: Release;
    changelogs: Changelog[];
    artifacts: Artifact[];
    affected_files: AffectedFile[];
}
