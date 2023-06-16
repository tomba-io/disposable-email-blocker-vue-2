<template>
    <div id="app">
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        />
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div>
                        <pre>{{ data }}</pre>
                    </div>
                    <h1 class="mb-3">Testing 1</h1>
                    <form novalidate>
                        <div class="row g-3">
                            <div class="col-md-12">
                                <label for="your-email" class="form-label"
                                    >Your Email</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="your-email"
                                    name="your-email"
                                    required
                                />
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button
                                            type="submit"
                                            class="btn btn-primary w-100"
                                        >
                                            Send with form and input
                                            type="email"
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <h1 class="mb-3">Testing 2</h1>
                    <div class="row g-3">
                        <div class="col-md-12">
                            <label for="your-email" class="form-label"
                                >Your Email</label
                            >
                            <input
                                type="email"
                                class="form-control"
                                id="your-email"
                                name="your-email"
                                required
                            />
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <button
                                        type="submit"
                                        class="btn btn-primary w-100"
                                    >
                                        Send with without form input
                                        type="email"
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="mb-3">Testing 3</h1>
                    <form novalidate>
                        <div class="row g-3">
                            <div class="col-md-12">
                                <label for="your-email2" class="form-label"
                                    >Your Email</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="your-email2"
                                    name="your-email2"
                                    required
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="your-name" class="form-label"
                                    >Your name</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="your-name"
                                    name="your-name"
                                />
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button class="btn btn-primary w-100">
                                            Send with input type="submit" and
                                            other inputs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <h1 class="mb-3">Testing 4</h1>
                    <form novalidate>
                        <div class="row g-3">
                            <div class="col-md-12">
                                <label for="text-email" class="form-label"
                                    >Your email</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="text-email"
                                    name="email"
                                />
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button
                                            type="submit"
                                            class="btn btn-primary w-100"
                                        >
                                            Send with type="text" name="email"
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <h1 class="mb-3">Testing 5</h1>
                    <form novalidate>
                        <div class="row g-3">
                            <div class="col-md-12">
                                <label for="your-username" class="form-label"
                                    >Your username</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="your-username"
                                    name="your-username"
                                />
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button
                                            type="submit"
                                            class="btn btn-primary w-100"
                                        >
                                            just check other forms
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            data: '',
        };
    },
    watch: {
        data(newValue, oldValue) {
            console.log(newValue, oldValue);
        },
    },
    mounted() {
        this.$blocker.on('done', (e) => {
            if (e.detail) {
                this.data = e.detail;
            }
        });
    },
};
</script>

<style>
body {
    background: #fafbfb;
}
</style>
