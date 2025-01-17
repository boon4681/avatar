<section class="flex gap-2 flex-col max-w-screen-md w-full mx-auto my-6">
    <h1 class="text-4xl">Avatar API</h1>
    <div>Create cool looking avatar</div>
    <div class="api">
        <header>/api/marble/[name]</header>
        <div class="request">
            <h2>Search-params</h2>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>usage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><kbd>size</kbd></td>
                        <td>
                            Size of image <kbd>size</kbd> is number; min: 32px;
                        </td>
                        <td>
                            <kbd>/[api]?size=32</kbd>
                        </td>
                    </tr>
                    <tr>
                        <td><kbd>rounded</kbd></td>
                        <td> Adjust Roundness; number; min: 0px </td>
                        <td>
                            <kbd>/[api]?rounded=32</kbd>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <response></response>
    </div>
</section>
